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
  - Ubuntu 18.04
---
Elegir el idioma y presionar la tecla **_Enter_** para continuar.
Elegir la distribución y variante del teclado, seleccionar **_Hecho_** y presionar la tecla **_Enter_** para continuar.
Seleccionar **_Reboot_** y presionar la tecla **_Enter_** para continuar.

## Configuración de la Red
En un servidor por lo general es necesario asignar una dirección IP estática.

Como primer paso es necesario conocer los adaptadores de red disponibles. Para ello, en la terminal se ingresa el siguiente comando:

```console
ifconfig
```

![alt text](../img/server23.png 'Interfaces disponibles')

> En este caso se puede observar una interfaces de red **_enp0s3_**

Para modificar la interfaces, se debe ingresar como usuario privilegiado **_root_** y abrir el archivo de configuración de Netplan usando un editor de texto.

> Netplan es una utilidad de línea de comandos implementada desde Ubuntu 17.10, la cual tiene como objetivo administrar y configurar de forma simple las interfaces en todos los sistemas Ubuntu.

```console
nano /etc/netplan/50-cloud-init.yaml
```

![alt text](../img/server25.png 'Archivo de configuración Netplan')

> Si el instalador de distribución no crea el archivo YAML, se puede generar con el siguiente comando:

```console
netplan generate
```
Al abrir el archivo de configuración de Netplan se vera lo siguiente:
![alt text](../img/server26.png 'Archivo de configuración Netplan')

Se ubica la interfaces que se quiere modificar y se ingresan las siguientes líneas:

```console
dhcp4: no
dhcp6: no
addresses: [192.168.1.200/24]
gateway4: 192.168.1.1
nameservers:
    addresses: [8.8.8.8, 8.8.4.4]
```

> Cambiar los campos por la información de su red

![alt text](../img/server27.png 'Archivo de configuración Netplan')

Una vez se configuran los valores, se guarda y se cierra el archivo (**_Ctrl + o, Ctrl + x_** para el editor nano).

Se deben aplicar los cambios con el siguiente comando:

```console
netplan apply
```
![alt text](../img/server29.png 'Aplicar cambios Netplan')

Se verifica que el cambio de dirección se haya aplicado.

```console
ifconfig
```

![alt text](../img/server30.png 'Interfaces disponibles')
