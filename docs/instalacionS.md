---
id: instalacionS
title: Instalación del Servidor
sidebar_label: Instalación
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
## Descargar Imagen ISO
Antes de comenzar la instalación debe ir a la [ página oficial](https://ubuntu.com/download/server "Download Ubuntu Server | Download | Ubuntu") y descargar la versión actual, para este caso es **Ubuntu Server 18.04 LTS**.

> LTS son las siglas de Long Term Support o Soporte a Largo Plazo, este tipo de versión es más estable.

![alt text](../img/server1.png 'Página oficial de Ubuntu')

Al hacer click en el botón **_DOWNLOAD_** se descarga un archivo _ubuntu-18.04-live-server-amd64.iso (848 Mb aprox.)_.
![alt text](../img/server2.png 'Descarga de archivo')

Una vez descargado el archivo, se puede quemar en un DVD :dvd:, bootear un Pendrive :pager: o montar en una Máquina Virtual :computer:.

## Primeros Pasos
Si el arranque del servidor es correcto, se mostrará la pantalla de inicio.
![alt text](../img/server3.png 'Arranque de instalación')

Poco después se iniciará el Asistente de Instalación, la primera pantalla permite elegir el idioma de preferencia.

> Para seleccionar los valores se pueden usar las flechas (arriba y abajo) y en las siguientes pantallas se pueden usar la tecla Tabulador (Tab), la barra espaciadora (para seleccionar algunos elementos) o la tecla Enter (para seleccionar o aceptar una acción).

Elegir el idioma y presionar la tecla **_Enter_** para continuar.
![alt text](../img/server4.png 'Selección de idioma')

## Distribución de Teclado
En la siguiente pantalla se solicita la distribución del teclado y la variante si es necesario. También se puede elegir la opción de **_Identificar Teclado_** para que el asistente detecte automáticamente la distribución.

Elegir la distribución y variante del teclado, seleccionar **_Hecho_** y presionar la tecla **_Enter_** para continuar.
![alt text](../img/server5.png 'Selección de distribución de teclado')

<!--
## Tipo de Instalación
Se tienen tres opciones para instalar Ubuntu Server:
- Instalar ubuntu
- Install MASS bare-metal cloud (region)
- Install MASS bar-metal cloud (rack)

> **MAAS** (Metal As A Service) es un servicio introducido por Canonical en 2012 que permite tratar servidores físicos como máquinas virtuales en la nube. Para más información ir a la [página oficial](https://maas.io "MAAS | Metal As A Service")

En este caso se elegirá **_Instalar Ubuntu_**, una instalación simple del servidor.
![alt text](../img/server5.png 'Selección del tipo de instalación')
-->

## Tarjeta de Red
El asistente de instalación detecta y configura los adaptadores de red que están disponibles. Si no se detecta ningún adaptador de red, la instalación podrá seguir avanzando pero no se comprobará si hay actualizaciones disponibles.

Seleccionar **_Hecho_** y presionar la tecla **_Enter_** para continuar.
![alt text](../img/server6.png 'Detección de tarjeta de red')

> En cualquier caso, se puede modificar la configuración de red tras la instalación.

## Proxy
Por lo general se deja en blanco, pero si en la red existe proxy se debe indicar la URL.

Ingresar URL del proxy, seleccionar **_Hecho_** y presionar la tecla **_Enter_** para continuar.
![alt text](../img/server7.png 'URL proxy')

## Mirror
Los espejos (mirrors) sirven para indicar el repositorio de donde se instalará el software y las futuras actualizaciones.

Ingresar URL del espejo, seleccionar **_Hecho_** y presionar la tecla **_Enter_** para continuar.
![alt text](../img/server8.png 'URL mirror')

> Se recomienda seleccionar un servidor cercano a su ubicación física para que la instalación tome menos tiempo.

## Configuración del Sistema de Archivos
Se tienen tres opciones:
- Use An Entire Disk
- Use An Entire Disk And Set Up LVM
- Manual

> En las dos primeras opciones se utiliza completamente el disco y se crean las particiones automáticamente

En este caso se elegirá **_Manual_** para crear un esquema de particiones personalizado. Presionar la tecla **_Enter_** para continuar.
![alt text](../img/server9.png 'Configuración del sistema de archivo')

Se debe elegir el disco duro a particionar.
![alt text](../img/server10.png 'Configuración del sistema de archivo')

> Si se tiene más de un disco duro en el equipo, es importante asegurarse de haber elegido el correcto.

### Particionamiento recomendado
| Partición | Tamaño               |
| :-------: | :------------------: |
| /home     | 100 Mb               |
| / o root  | Entre 3.0 y 5.0 Gb   |
| Swap      | Igual o doble de RAM |

### Swap recomendada
| RAM                | Swap         |
| :----------------: | :----------: |
| Menos de 1 Gb      | Igual RAM    |
| Entre 2 y 4 Gb     | 2 Gb o mas   |
| Entre 4 y 16 Gb    | 4 Gb o mas   |
| Entre 16 y 256 Gb  | 16 Gb o mas  |
| Entre 256 y 512 Gb | 322 Gb o mas |

Para crear las particiones, se debe elegir el disco y presionar la tecla **_Enter_** para desplegar el menú. Una vez desplegado el menú se selecciona **_Add Partition_**.
![alt text](../img/server11.png 'Agregar partición')

En este caso se crearan dos particiones, **_Swap_** (espacio de intercambio) y **_raiz o /_** donde se encuentra todo el sistema operativo.

Ingresar los valores, seleccionar **_Create_** y presionar la tecla **_Enter_** para continuar.
![alt text](../img/server12.png 'Particion Swap')

Repetir los dos pasos anteriores.
![alt text](../img/server13.png 'Particion root')

![alt text](../img/server14.png 'Particiones')

Al hacer click en **_HECHO_** se advertirá que la partición va a ser formateada y se van a perder todos los datos.

Seleccionar **_Continuar_** y presionar la tecla **_Enter_**.
![alt text](../img/server15.png 'Particionar')

## Configuración de Perfil
Ingresar la información sobre el perfil como: nombre del usuario, nombre del servidor, usuario y la contraseña que desea. Seleccionar **_Hecho_** y presionar la tecla **_Enter_** para continuar.
![alt text](../img/server16.png 'Perfil')

En la siguiente pantalla preguntará si se quiere instalar el paquete OpenSSH para acceder remotamente al sistema. También se pueden importar claves SSH desde Github o Launchpad.

Presionar la tecla **_Tab_** para elegir **_Install OpenSSH server_**, seleccionar **_Hecho_** y presionar la tecla **_Enter_** para continuar.
![alt text](../img/server17.png 'Instalar OpenSSH')

## Paquetes de Software
En la siguiente pantalla se pueden seleccionar los paquetes de software que están en la lista. En este caso no se elegirá ningún paquete.

Seleccionar **_Hecho_** y presionar la tecla **_Enter_** para continuar.
![alt text](../img/server18.png 'Instalación de paquetes')

## Pasos Finales
Por último, cuando la instalación y configuración de los paquetes termine aparecerá en la parte inferior la opción **_Reboot_** y esto indicará que la instalación ha terminado.

Seleccionar **_Reboot_** y presionar la tecla **_Enter_** para continuar.
![alt text](../img/server19.png 'Pasos finales')

El sistema inicia el proceso de apagado y al final pedirá que se retire el soporte de instalación utilizado (DVD o Pendrive).

Presionar la tecla **_Enter_** para continuar.
![alt text](../img/server20.png 'Reinicio')

Poco después se completará el reinicio y estará listo el sistema.
![alt text](../img/server21.png 'Carga del sistema')

![alt text](../img/server22.png 'Inicio de Sesión')
