---
id: configuracionS
title: Configuración de CentOS 7
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
## Configuración de Red
## Modo Gui
> :pushpin: **nmtui** es una herramienta que interactúa con NetworkManager para configurar las interfaces de red en sistemas operativos Linux Red Hat y derivados.

Ingrese el siguiente comando y presione la tecla **Enter** para abrir la herramienta nmtui.

```console
nmtui
```

Seleccione **[Modificar una conexión]** y presione la tecla **Enter** para continuar.
![alt text](../img/centos7.png)

Seleccione la interface a modificar, **[Editar...]** y presione la tecla **Enter** para continuar.
![alt text](../img/centos7.1.png)

Cambie de **[Automática]** a **[Manual]** y seleccione **[Mostrar]**.
![alt text](../img/centos7.2.png)

Ingrese los datos para configurar la interfaces. Seleccione **[Aceptar]** y presionar la tecla **Enter** para guardar.
![alt text](../img/centos7.3.png)

Seleccione **[Atrás]** y presionar la tecla **Enter** para continuar.
![alt text](../img/centos7.4.png)

Seleccione **[Salir]** o **[Aceptar]** y presionar la tecla **Enter** para terminar la configuración.
![alt text](../img/centos7.5.png)

Para aplicar cambios, reinicie el servicio network. Ingrese el siguiente comando y presione la tecla **Enter**.

```console
systemctl restart network.service
```
![alt text](../img/centos8.png)

## Modo Consola
Ingrese el siguiente comando y presione la tecla **Enter** para ubicar la interface a modificar.

```console
cd /etc/sysconfig/network-scripts/
```
![alt text](../img/centos9.png)

Ingrese el siguiente comando y presione la tecla **Enter** para abrir el archivo de configuración.
```console
nano ifcfg-enp0s3
```

![alt text](../img/centos9.1.png)

Línea 4: cambie de **none** a **static**.
```console
BOOTPROTO="static"
```

Línea 15: cambie de **no** a **yes**.
```console
ONBOOT="yes"
```
Línea 16: añada los datos de la red.
```console
IPADDR="xxx.xxx.xxx.xxx"
PREFIX=24
GATEWAY="xxx.xxx.xxx.xxx"
DNS1="xxx.xxx.xxx.xxx"
```

![alt text](../img/centos9.2.png)
Guarde y se cierre el archivo (**Ctrl + o, Ctrl + x** para el editor nano).

Para aplicar cambios, reinicie el servicio network. Ingrese el siguiente comando y presione la tecla **Enter**.

```console
systemctl restart network.service
```
![alt text](../img/centos8.png)
