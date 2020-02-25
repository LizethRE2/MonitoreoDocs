---
id: configuracionS
title: Configuración del Servidor
sidebar_label: Configuración
hide_title: false
hide_table_of_contents: false
keywords:
  - Sistema de Monitoreo de Red
  - NMS
  - Universidad Francisco de Paula Santander
  - UFPS
  - Centro de Servicios de Información
  - CSI
  - Servidor
  - CentOS 7
---
## Configuración de la Red
En un servidor por lo general es necesario asignar una dirección IP estática.

Como primer paso es necesario conocer los adaptadores de red disponibles. Para ello, en la terminal se ingresa el siguiente comando:

```console
ifconfig
```

En este caso se puede observar el adaptador **_enp0s3_**, el cual no se encuentra configurado.
![alt text](../img/centos15.png 'Interfaces disponibles')

## Modo Gui
Para modificar el adaptador de red se debe ingresar como usuario privilegiado **_root_** y utilizar la herramienta nmtui (Network Manager Terminal User Interface).

> **nmtui** es una herramienta que interactúa con NetworkManager para configurar las interfaces de red en sistemas operativos Linux Red Hat y derivados.

Ingrese el siguiente comando para abrir la herramienta nmtui:

```console
nmtui
```

Elija **_modificar una conexión_** y presione la tecla **_Enter_** para continuar.
![alt text](../img/centos16.png 'Interface nmtui')

> Para seleccionar los valores se pueden usar las flechas (arriba y abajo), la tecla Tabulador (Tab), la barra espaciadora (para seleccionar algunos elementos) o la tecla Enter (para seleccionar o aceptar una acción).

Elija el adaptador a modificar, **_Editar..._**  y presione la tecla **_Enter_** para continuar.
![alt text](../img/centos17.png 'Interface nmtui')

Dentro del panel de **_Edit Connection_** se puede observar que la dirección IP está en Automática o DHCP.
![alt text](../img/centos18.png 'Interface nmtui')

Para modificar la IP se cambia de Automática a **_Manual_** y se selecciona **_Mostrar_**. Una vez se despliega el menú se ingresan los parámetros requeridos.

Elija **_Aceptar_** y presionar la tecla **_Enter_** para continuar.
![alt text](../img/centos19.png 'Interface nmtui')

Elija **_Back_** y presionar la tecla **_Enter_** para continuar.
![alt text](../img/centos20.png 'Interface nmtui')

Elija **_Salir_** o **_Aceptar_** y presionar la tecla **_Enter_** para continuar.
![alt text](../img/centos21.png 'Interface nmtui')

Para aplicar y verificar los cambios ingrese los siguientes comandos:

```console
systemctl restart network.service
ifconfig
```
![alt text](../img/centos22.png 'Aplicar cambios')

## Modo Consola
Para modificar el adaptador de red se debe ingresar como usuario privilegiado **_root_** y abrir el archivo de configuración del adaptador usando un editor de texto.

Ingrese el siguiente comando para ubicar el adaptador de red a modificar:

```console
cd etc/sysconfig/network-scripts/
```

![alt text](../img/centos23.png 'Archivo de configuración')

En este caso se elige el adaptador **_ifcfg-enp0s3_**.

```console
nano ifcfg-enp0s3
```

![alt text](../img/centos24.png 'Archivo de configuración')

Al abrir el archivo de configuración se puede visualizar lo siguiente:
![alt text](../img/centos25.png 'Archivo de configuración')

Para modificar la IP, se cambian las siguientes líneas:

```console
BOOTPROTO=static
ONBOOT=yes
```

Además se añaden las siguientes líneas al final:

```console
IPADDR=192.168.0.200
PREFIX=24
GATEWAY=192.168.0.1
DNS1=8.8.8.8
```
> Cambiar los campos por la información de la red

![alt text](../img/centos26.png 'Archivo de configuración')
Una vez se configuran los valores, se guarda y se cierra el archivo (**_Ctrl + o, Ctrl + x_** para el editor nano).

Para aplicar y verificar los cambios ingrese los siguientes comandos:

```console
systemctl restart network.service
ifconfig
```
![alt text](../img/centos22.png 'Aplicar cambios')
