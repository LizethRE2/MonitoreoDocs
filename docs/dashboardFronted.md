---
id: dashboardZ
title: Dashboard
sidebar_label: Dashboard
hide_title: true
hide_table_of_contents: false
keywords:
  - Sistema de Monitoreo de Red
  - NMS
  - Universidad Francisco de Paula Santander
  - UFPS
  - Centro de Servicios de Información
  - CSI
  - Zabbix
---
o Dashboard (Panel de mando): aquí veremos el estado general del
sistema (número de equipos monitorizados, nuevos valores por
Despliegue de la plataforma de
monitorización
Sistema de monitorización de la
infraestructura CCTV en la UC3M
con Zabbix
126 Sistema de monitorización de la infraestructura CCTV en la UC3M con Zabbix
segundo), el estado de cada equipo de la plataforma, los últimos eventos
ocurridos, etc.

## Dashboard
La sección Dashboard está diseñada para mostrar el resumen de toda la información importante.
![alt text](../img/zabbixMonitoring.png)
### Overview
Un panel de control consta de widgets y cada widget está diseñado para mostrar información de un determinado tipo y fuente, que puede ser un resumen, un mapa, un gráfico, el reloj, etc.



Los widgets se agregan y editan en el modo de edición del tablero. Los widgets se ven en el modo de visualización del tablero.

Si bien en un solo panel puede agrupar widgets de varias fuentes para obtener una descripción general rápida, también es posible crear varios paneles que contienen diferentes conjuntos de vistas generales y cambiar entre ellos.

El período de tiempo que se muestra en los widgets de gráficos se controla mediante el selector de período de tiempo ubicado encima de los widgets. La etiqueta del selector de período de tiempo, ubicada a la derecha, muestra el período de tiempo seleccionado actualmente. Hacer clic en la etiqueta de la pestaña permite expandir y contraer el selector de período de tiempo.

Tenga en cuenta que cuando el tablero se muestra en modo quiosco (accesible desde el modo de pantalla completa) y solo se muestran widgets, es posible alejar el período del gráfico haciendo doble clic en el gráfico.

Ver paneles
Para acceder a todos los paneles configurados, haga clic en el enlace Todos los paneles justo debajo del título de la sección.





Para ver un único panel, haga clic en su nombre en la lista de todos los paneles.

Para eliminar uno o varios paneles, marque las casillas de verificación de los paneles respectivos y haga clic en Eliminar debajo de la lista.

Crear un tablero
Al ver todos los paneles, puede hacer clic en el botón Crear panel para crear un nuevo panel:



Inicialmente el tablero está vacío. Puede agregar widgets al tablero de la siguiente manera:

haciendo clic en el botón Agregar widget
haciendo clic en el enlace Agregar un nuevo widget en el marcador de posición del widget
Haga clic en el botón Guardar cambios para guardar el tablero. Si hace clic en Cancelar , el panel no se creará.

Agregar widgets
Para agregar un widget a un tablero:

Haga clic en el botón / enlace Agregar widget en el modo de edición del tablero
Seleccione el tipo de widget
Ingrese los parámetros del widget
Haga clic en Agregar


Los siguientes widgets se pueden agregar a un tablero:

Registro de Acción
Reloj
Resumen de datos
Estado de descubrimiento
Gráficos favoritos
Mapas favoritos
Pantallas favoritas
Grafico
Graph (clásico)
Hosts problemáticos
Mapa
Árbol de navegación del mapa
Texto sin formato
Problemas
Información del sistema
Problemas por severidad
Descripción general del disparador
URL
Monitoreo web
En el modo de edición del tablero, los widgets se pueden mover alrededor del tablero haciendo clic en la barra de título del widget y arrastrándolo a una nueva ubicación. Además, puede hacer clic en los siguientes botones dentro del widget para:

 - editar un widget;
 - eliminar un widget
Haga clic en Guardar cambios para el tablero para hacer cambios permanentes en los widgets.

Widgets dinámicos
Al configurar algunos de los widgets:

Gráficos (simples y personalizados)
Texto sin formato
URL
hay una opción adicional llamada elemento dinámico . Puede marcar esta casilla para hacer que el widget sea dinámico, es decir, capaz de mostrar contenido diferente en función del host seleccionado.

Ahora, al guardar el panel, notará que han aparecido dos nuevos menús desplegables sobre el panel para seleccionar el grupo / host:



Por lo tanto, tiene un widget, que puede mostrar contenido basado en los datos del host que se selecciona en el menú desplegable. El beneficio de esto es que no necesita crear widgets adicionales solo porque, por ejemplo, desea ver los mismos gráficos que contienen datos de varios hosts.

Ver y editar un tablero
Al ver un solo tablero, las siguientes opciones están disponibles:

	Cambie al modo de edición del tablero.
	Abre el menú de acciones.
Compartir	Edite las preferencias de uso compartido para el tablero. Los paneles se pueden hacer públicos o privados.
Los paneles públicos son visibles para todos los usuarios.
Los paneles privados solo son visibles para su propietario. El propietario puede compartir paneles privados con otros usuarios y grupos de usuarios.
Para obtener detalles sobre cómo configurar el uso compartido, consulte la sección de configuración del mapa .
Crear nuevo	Crea un nuevo tablero de instrumentos.
Primero se le solicita que ingrese las propiedades generales del nuevo tablero: propietario y nombre. Luego, el nuevo tablero se abre en modo de edición y puede agregar widgets.
Clon	Cree un nuevo tablero copiando las propiedades del existente.
Primero se le solicita que ingrese las propiedades generales del nuevo tablero: propietario y nombre. Luego, el nuevo tablero se abre en modo de edición con todos los widgets del tablero original.
Eliminar	Eliminar el tablero de instrumentos.
	Mostrar el tablero en modo de pantalla completa.
Desde Zabbix 4.0.1, el modo de pantalla completa también se puede acceder con las siguientes URL parámetros:
/zabbix.php?action=dashboard.view&fullscreen=1. Salir:/zabbix.php?action=dashboard.view&fullscreen=0
	Mostrar el tablero en modo quiosco. En este modo, solo se muestran widgets.
El botón de modo kiosco aparece cuando se activa el modo de pantalla completa.
Para salir del modo quiosco, mueva el cursor del mouse hasta que aparezca el botón de salida y haga clic en él. Tenga en cuenta que volverá al modo normal (no al modo de pantalla completa).
Desde Zabbix 4.0.1, el modo de quiosco también se puede acceder con las siguientes URL parámetros:
/zabbix.php?action=dashboard.view&kiosk=1. Para salir al modo normal:/zabbix.php?action=dashboard.view&fullscreen=0
El modo de edición está abierto:

cuando se crea un nuevo tablero
cuando hace clic en el botón Editar tablero para un tablero existente
En el modo de edición del tablero, las siguientes opciones están disponibles:

	Edite las propiedades generales del tablero: nombre y propietario.
	Agrega un nuevo widget.
	Guardar cambios en el tablero.
	Cancele los cambios en el tablero.
Permisos para paneles
Los permisos para los paneles de control para usuarios regulares y administradores de Zabbix están limitados de la siguiente manera:

Pueden ver y clonar un tablero si tienen al menos derechos de LECTURA;
Pueden editar y eliminar el tablero solo si tienen derechos de LECTURA / ESCRITURA;
No pueden cambiar el propietario del tablero.
Menú de host
Al hacer clic en un host en el widget Problemas, aparece el menú del host. Incluye enlaces a scripts personalizados, inventario, datos más recientes, problemas, gráficos y pantallas para el host.



Se puede acceder al menú de host haciendo clic en un host en varias otras secciones frontend:

Monitoreo → Problemas
Monitoreo → Problemas → Detalles del evento
Supervisión → Descripción general (en hosts: izquierda )
Monitoreo → Últimos datos
Monitoreo → Pantallas (en cuestiones de host y grupo de hosts cuestiones widgets)
Monitoreo → Mapas
Informes → Disparadores top 100
Ventana emergente de evento problemático
La ventana emergente de evento problemático incluye la lista de eventos problemáticos para este activador y, si está definida, la descripción del activador y una URL en la que se puede hacer clic .



Para que aparezca la ventana emergente del evento problemático:

Pase el mouse sobre el nombre del problema en la columna Problema-Gravedad del widget Problemas . La ventana emergente desaparece una vez que quita el mouse del nombre del problema.
haga clic en el nombre del problema en la columna Problema-Gravedad del widget Problemas . La ventana emergente desaparece solo si vuelve a hacer clic en el nombre del problema.
Los valores resueltos de las macros {ITEM.VALUE} y {ITEM.LASTVALUE} en las descripciones de disparo se truncan a 20 caracteres. Para ver los valores completos, puede usar funciones de macro con estas macros, por ejemplo {{ITEM.VALUE}.regsub("(.*)", \1)}, {{ITEM.LASTVALUE}.regsub("(.*)", \1)}como solución alternativa.





o Overview (Vistazo general): desde aquí podremos ver rápidamente los
parámetros monitorizados para cada equipo. Dependiendo de si tienen
configurada una alerta y, del nivel de ésta, los datos aparecerán
resaltados con sombreado de distinto color para identificarlos
inmediatamente.
o Web: monitorización de las aplicaciones Web. En principio, no se
contempla la monitorización de ninguna Web, aunque está en estudio
incluir dentro de esta sección la monitorización del propio frontend de
Zabbix.
o Latest data (Últimos datos): como su nombre indica, aquí podemos ver
los últimos valores de monitorización recogidos. Desde aquí es posible
filtrar éstos por nombre así como obtener gráficos con los que observar
su evolución.
o Triggers (Disparadores): los disparadores son los mecanismos que hacen
que una determinada alarma se active. Aquí podemos ver el estado de
esas alarmas (activas o no).
o Events (Eventos): muestran los cambios que se han llevado a cabo
producto de la activación de las alertas configuradas. Indica el cambio de
estado de la alerta asociada (inactiva a activa y viceversa).
o Graphs (Gráficos): desde aquí podemos ver los gráficos que hayamos
creado para cada equipo introducido en la plataforma.
o Screens (Pantallas): las pantallas se construyen partiendo de gráficos ya
existentes. Desde este menú podemos visualizarlas.
o Maps (Mapas): aquí veremos los mapas que previamente hayamos
creado.
o Discovery (Descubrimiento): se nos muestra aquí el estado de las reglas
de descubrimiento que se hayan definido para identificar nuevos equipos
conectados a la plataforma.
o IT services (Servicios IT): servicios de alto nivel para visualización del
estado de la infraestructura.
 Inventory (Inventario): permite la visualización, si están definidos, de los
datos de inventario de los sistemas monitorizados.
o Hosts (Equipos de la plataforma): si a la hora de introducir un equipo en
la plataforma incluimos una dirección URL en su descripción y ésta
comienza por https o http, se creará en esta sección de inventario un
enlace a esa dirección.
 Reports (Informes): cada vez que se necesite obtener un informe detallado
en el que se visualicen diversos datos en pantalla, esta será la categoría a
visitar.
Despliegue de la plataforma de
monitorización
Sistema de monitorización de la
infraestructura CCTV en la UC3M
con Zabbix
Sistema de monitorización de la infraestructura CCTV en la UC3M con Zabbix 127
o Status of Zabbix (Estado de Zabbix): aquí podemos ver si el estado de la
plataforma en términos del número de equipos monitorizados, número
de elementos o parámetros monitorizados, disparadores, eventos
generados y alertas lanzadas.
o Availability Report (Informe de disponibilidad): muestra el porcentaje
de tiempo durante el cual las alertas han estado activas o inactivas
informando así sobre la disponibilidad de cada equipo monitorizado.
o Most busy triggers top 100 (listado de los 100 disparadores con más
actividad): se mostrará una lista con el nombre de los 100 disparadores
que han registrado más actividad en la plataforma.
o Bar reports (Informes de barras): los informes de barras permiten
observar la información de monitorización en mayor detalle que los
gráficos definidos por defecto en Zabbix. Desde aquí se pueden crear y
personalizar esos informes.
 Configuration (Configuración): constituye el punto desde el cual crear los
sistemas monitorizados o hosts, los parámetros a monitorizar en éstos, los
mensajes de notificación en caso de alertas, la programación de disparadores,
etc.
o General: ofrece funcionalidades como la importación de imágenes y
fondos con los que construir mapas, creación de mapeados de valores,
configuración del tiempo que está activa la plataforma, etc.
o Host groups (Grupos de equipos): desde esta sección se podrán crear
grupos dentro de los cuales organizar los equipos de la plataforma.
o Hosts (Equipos de la plataforma): este es el punto más importante, pues
desde aquí se introducen los equipos que se vayan a monitorizar en la
plataforma.
o Maintenance (Mantenimiento): permite crear periodos de
mantenimiento para la plataforma de monitorización. De esta manera
podemos desactivar temporalmente el frontend de Zabbix cuando
queramos llevar a cabo operaciones de mantenimiento sobre la base de
datos, por poner un ejemplo.
o Web: desde este punto configuraremos las páginas Web que se deseen
monitorizar.
o Actions (Acciones): en este menú podemos crear, borrar, activar y
desactivar las acciones (envío de e-mail, etc) asociadas a una
determinada alarma. Permite personalizar las condiciones bajo las cuales
se ejecutarán las acciones.
o Screens (Pantallas): a partir de los gráficos creados se podrán componer
pantallas en las que mostrar, de un solo vistazo, uno o varios de esos
gráficos. También se puede construir una secuencia de diapositivas (slide
show) que muestre una secuencia automática de una serie de gráficos o
pantallas.
Despliegue de la plataforma de
monitorización
Sistema de monitorización de la
infraestructura CCTV en la UC3M
con Zabbix
128 Sistema de monitorización de la infraestructura CCTV en la UC3M con Zabbix
o Maps (Mapas): aquí se pueden crear mapas con los que representar el
estado de la plataforma a través de iconos e imágenes.
o IT services (Servicios IT): en esta sección se configuran los servicios de
alto nivel para visualización de la infraestructura.
o Discovery (Descubrimiento): desde aquí configuraremos las reglas de
descubrimiento para la detección de nuevos equipos conectados a la
plataforma.
o Export/Import (Exportar/Importar): son funcionalidades que permiten
exportar los equipos y los parámetros monitorizados a un fichero de
formato xml. Igualmente, la opción de importación permite efectuar la
operación inversa. Son útiles para hacer copias de seguridad de la
estructura de monitorización de la plataforma.
 Administración (Administration): mientras que la categoría de Configuración
se ocupa de los aspectos relacionados con todo aquello que se monitoriza y
cómo actuar sobre determinadas condiciones, la categoría de Administración
brinda la posibilidad de personalizar los aspectos internos de Zabbix tales
como los métodos de autenticación, los usuarios, los permisos y otras tareas
similares.
o General: aquí podemos llevar a cabo tareas como la importación de
imágenes, creación de mapeados de valores, por citar algunos ejemplos.
o DM (Distributed Monitoring – Monitorización distribuida): en esta
sección se configurarán los nodos y/o proxies de la plataforma de
monitorización.
o Authentication (Autenticación): se puede escoger entre varios métodos
de autenticación en la plataforma (Internal, LDAP, HTTP), cada uno de
ellos con sus respectivas opciones de configuración.
o Users (Usuarios): aquí añadiremos y configuraremos los usuarios/grupos
de usuarios de la herramienta Zabbix. Podemos personalizar los permisos
a aplicar a cada uno de esos usuarios o grupo de usuarios.
o Media Types (Tipos de medios): en este apartado definimos los medios a
través de los cuales se comunica Zabbix con los usuarios cuando se
produce un evento en el sistema.
o Scripts: desde aquí el usuario puede crear scripts a ejecutar del lado del
servidor Zabbix sobre los equipos de la plataforma.
o Audit (Auditoría): refleja los cambios llevados a cabo en la configuración
de Zabbix y los inicios de sesión a través de la interfaz Web.
o Queue (Cola de valores): muestra los valores de monitorización que
están pendientes de ser refrescados. Es simplemente una representación
de la información de la base de datos.
o Notifications (Notificaciones): muestra los mensajes enviados a través
de los medios configurados previamente.
Despliegue de la plataforma de
monitorización
Sistema de monitorización de la
infraestructura CCTV en la UC3M
con Zabbix
Sistema de monitorización de la infraestructura CCTV en la UC3M con Zabbix 129
o Locales: ofrece funcionalidades para edición de traducciones del
lenguaje del frontend de Zabbix.
o Installation (Instalación): en este apartado comprobaremos que los
componentes software que necesita Zabbix (PHP, base de datos MySQL)
funcionan correctamente.


## Inventory


### Dashboard
![alt text](../img/zabbixMonitoring.png)
o Dashboard (Panel de mando): aquí veremos el estado general del
sistema (número de equipos monitorizados, nuevos valores por
Despliegue de la plataforma de
monitorización
Sistema de monitorización de la
infraestructura CCTV en la UC3M
con Zabbix
126 Sistema de monitorización de la infraestructura CCTV en la UC3M con Zabbix
segundo), el estado de cada equipo de la plataforma, los últimos eventos
ocurridos, etc.

0 Problems.
o Triggers (Disparadores): los disparadores son los mecanismos que hacen
que una determinada alarma se active. Aquí podemos ver el estado de
esas alarmas (activas o no).

o Events (Eventos): muestran los cambios que se han llevado a cabo
producto de la activación de las alertas configuradas. Indica el cambio de
estado de la alerta asociada (inactiva a activa y viceversa).

o Overview (Vistazo general): desde aquí podremos ver rápidamente los
parámetros monitorizados para cada equipo. Dependiendo de si tienen
configurada una alerta y, del nivel de ésta, los datos aparecerán
resaltados con sombreado de distinto color para identificarlos
inmediatamente.

o Web: monitorización de las aplicaciones Web. En principio, no se
contempla la monitorización de ninguna Web, aunque está en estudio
incluir dentro de esta sección la monitorización del propio frontend de
Zabbix.

o Latest data (Últimos datos): como su nombre indica, aquí podemos ver
los últimos valores de monitorización recogidos. Desde aquí es posible
filtrar éstos por nombre así como obtener gráficos con los que observar
su evolución.

o Graphs (Gráficos): desde aquí podemos ver los gráficos que hayamos
creado para cada equipo introducido en la plataforma.

o Screens (Pantallas): las pantallas se construyen partiendo de gráficos ya
existentes. Desde este menú podemos visualizarlas.

o Maps (Mapas): aquí veremos los mapas que previamente hayamos
creado.

o Discovery (Descubrimiento): se nos muestra aquí el estado de las reglas
de descubrimiento que se hayan definido para identificar nuevos equipos
conectados a la plataforma.

o Services (Servicios IT): servicios de alto nivel para visualización del
estado de la infraestructura.
