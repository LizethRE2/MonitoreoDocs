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
  - CentOS 7
---
## Descarga de Imagen ISO
Antes de comenzar la instalación debe ir a la [ página oficial](https://www.centos.org/download/ "Download CentOS") y descargar la versión de preferencia, para este caso es **CentOS 7**.

![alt text](../img/centos1.png 'Página oficial de Ubuntu')

Se tienen 3 opciones de descarga:
- DVD ISO
- Everything ISO
- Minimal ISO

En este caso se elige DVD ISO. Al hacer clic en el botón **_DVD ISO_** se descarga un archivo _CentOS-7-x86_64-DVD-1804.iso (4,5 Gb aprox.)_. Una vez descargado el archivo, se puede quemar en un DVD :dvd:, bootear un Pendrive :pager: o montar en una Máquina Virtual :computer:.

## Primeros Pasos
Se tienen dos opciones para instalar CentOS:
- Install CentOS 7
- Test this media & install CentOS 7

> La segunda opción permite verificar la ISO, al comprobar que esta es válida, continua cargando el boot de arranque.

En este caso se elige **_Install CentOS 7_**. Presione la tecla **_Enter_** para continuar.
![alt text](../img/centos2.png 'Selección del tipo de instalación')

Si el arranque de la ISO es correcto, se muestra el boot de arranque.
![alt text](../img/centos3.png 'Arranque de instalación')

Poco después se inicia el asistente de instalación, la primera pantalla permite elegir el idioma de preferencia.

> Para seleccionar los valores se puede utilizar el Mouse o las teclas (flechas de arriba y abajo, Tab, barra espaciadora o Enter).

Elija el idioma de preferencia y haga clic en el botón **_continuar_**.
![alt text](../img/centos4.png 'Selección de idioma')

## Resumen de Instalación
En la siguiente pantalla se muestra un grupo de categorías a configurar antes de instalar CentOS.
- Regionalización (fecha & hora, teclado y soporte de idioma)
- Software (origen de instalación y selección de software)
- Sistema (destino de la instalación, KDUMP, red & nombre de equipo y security polity)

![alt text](../img/centos5.png 'Resumen de instalación')

> Los elementos que tienen un triángulo naranja y una leyenda en rojo requieren de alguna configuración.

Para configurar un elemento se debe hacer clic en el elemento y el asistente de instalación abre la ventana correspondiente.

### Regionalización
Si se cuenta con conexión a Internet, el asistente configura automáticamente la fecha y hora. La configuración del teclado y soporte de idioma se hizo en el paso anterior.

#### Fecha y Hora
Haga clic en el botón **_Listo_** para continuar.
![alt text](../img/centos5.1.png 'Regionalización')

#### Teclado
Haga clic en el botón **_Listo_** para continuar.
![alt text](../img/centos5.2.png 'Regionalización')

#### Soporte de Idioma
Haga clic en el botón **_Listo_** para continuar.
![alt text](../img/centos5.3.png 'Regionalización')

### Software
#### Origen de Instalación
Por defecto, el origen de la instalación es el medio de arranque, en este caso es una ISO. Haga clic en el botón **_Listo_** para continuar.
![alt text](../img/centos5.4.png 'Software')

#### Selección de Software
Esta es una de las pantallas más importantes, ya que es donde se puede seleccionar el tipo de servidor y los paquetes o aplicaciones que se desean instalar.

En este caso se selecciona **_Servidor de infraestructura_** y **_administración remota para linux_**, lo que permite administrar el servidor de forma remota por medio de SSH. Haga clic en el botón **_Listo_** para continuar.
![alt text](../img/centos5.5.png 'Software')

### Sistema
#### Destino de la Instalación
El destino de la instalación es donde se indica el disco o unidad en la que se va a instalar CentOS y el tipo de particionado.

En este caso se elige el disco de preferencia y el tipo de particionado automático. Haga clic en el botón **_Listo_** para continuar.
![alt text](../img/centos5.6.png 'Sistema')

#### KDUMP
> **Kdump** es un mecanismo de volcado de memoria de daños de kernel. Si se presenta un fallo en el sistema, Kdump captura la información.

Haga clic en el botón **_Listo_** para continuar.
![alt text](../img/centos5.7.png 'Sistema')

#### Red y Nombre de equipo
El asistente detecta y configura los adaptadores de red que están disponibles. Haga clic en el botón **_Listo_** para continuar.

> El adaptador de red se puede modificar mas adelante.

![alt text](../img/centos5.8.png 'Sistema')

#### Security polity
> La aplicación de una política de seguridad no es necesaria en todos los sistemas. Esta pantalla sólo debe ser usada cuando se debe configurar una política específica.

Haga clic en el botón **_Listo_** para continuar.
![alt text](../img/centos5.9.png 'Sistema')

Cuando se finalice la configuración de cada elemento haga clic en el botón **_Empezar instalación_**.
![alt text](../img/centos6.png 'Finalizar instalación')

## Configuración de Perfil
Mientras se instala CentOS, en paralelo se debe configurar la contraseña y el usuario, hacer clic en el elemento a configurar.
![alt text](../img/centos7.png 'Configuración de perfil')

### Contraseña de Root
Ingrese la contraseña para el SuperUsuario (root). Haga clic en el botón **_Listo_** para continuar.
![alt text](../img/centos8.png 'Configuración de perfil')

### Crear Usuario
Ingrese la información sobre el perfil como: nombre del usuario, usuario y contraseña. Haga clic en el botón **_Listo_** para continuar.
![alt text](../img/centos9.png 'Configuración de perfil')

## Pasos Finales
Cuando se finalice la configuración de perfil haga clic en el botón **_Finalizar configuración_**.
![alt text](../img/centos10.png 'Finalizar configuración')

![alt text](../img/centos11.png 'Reinicio')

Cuando se termine la instalación de paquetes se puede reiniciar el servidor para terminar la instalación. Haga clic en el botón **_Reiniciar_** para continuar.
![alt text](../img/centos12.png 'Reinicio')

Poco después se completa el reinicio y el servidor estará listo para utilizarse.
![alt text](../img/centos13.png 'Reinicio')

![alt text](../img/centos14.png 'Inicio de Sesión')
