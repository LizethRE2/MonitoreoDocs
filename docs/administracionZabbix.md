---
id: administracionH
title: Introducción
sidebar_label: Introducción
hide_title: false
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
Esta sección cubre la administración eficaz del entorno de monitoreo implantado. La información incluye instrucciones e imágenes paso a paso.

## Inicio de Sesión
Acceda a la URL: **http://IP_servidor/zabbix** desde un navegador web. Ingrese el nombre de usuario y la contraseña.

![alt text](../img/zabbix7.png)
Una vez ingresados los datos, haga clic en el botón **[Sign in]**.

## Menús
Zabbix Frontend está compuesto por 5 menús, estos a su vez poseen una serie de submenús:
![alt text](../img/zabbixFrontend1.png)

### Monitoring
El menú Monitoring contiene secciones que permiten visualizar los datos, los problemas existentes y las graficas construidas sobre la información recopilada. Al hacer clic sobre esta opción, aparecen las siguientes secciones:
![alt text](../img/zabbixFrontend2.png)

- **Dashboard**. La sección Dashboard muestra el resumen de toda la información importante. En un solo panel se agrupan widgets y cada widget muestra información de un determinado tipo y fuente, que puede ser un resumen, un mapa, un gráfico, el reloj, etc.

- **Problems**. La sección Problems muestra los problemas presentados.

- **Overview**. La sección Overview muestra una descripción general del estado de los parámetros monitoreados de uno o varios equipos.

- **Web**. La sección Web muestra información actual sobre escenarios web.

- **Latest data**. La sección Latest muestra los últimos valores recopilados por equipo.

- **Graphs**. La sección Graphs muestra cualquier gráfico personalizado que se haya configurado.

- **Screens**. La sección Screens muestra las pantallas globales. Pueden estar formadas por
mapas, gráficos y otras pantallas.

- **Maps**. La sección Maps muestra los mapas de red.

- **Discovery**. La sección Discovery muestra los resultados del descubrimiento de red. Los equipos descubiertos se ordenan según la regla de descubrimiento.

- **Services**. La sección Services muestra el estado de la infraestructura de TI o los servicios a nivel de disponibilidad, rendimiento u otros atributos. Permite comprobar la calidad de los servicios.

### Inventory
El menú Inventory contiene secciones que proporcionan una visión general de los datos de inventario de los equipos monitoreados. Al hacer clic sobre esta opción, aparecen las siguientes secciones:
![alt text](../img/zabbixFrontend3.png)

- **Overview**. La sección Overview muestra una descripción general de los datos de inventario del host.

- **Hosts**. La sección Hosts muestra los datos de inventario de los hosts.

### Reports
El menú Reports contiene secciones que permiten visualizar una variedad de informes como información del sistema, alertas y datos recopilados. Al hacer clic sobre esta opción, aparecen las siguientes secciones:
![alt text](../img/zabbixFrontend4.png)

- **System information**. La sección System information muestra un resumen de los datos clave del sistema.

- **Availability report**. La sección Availability report muestra el porcentaje de tiempo que las alertas han
permanecido en un determinado estado, informando así sobre la disponibilidad de cada
equipo.

- **Triggers top 100**. La sección Triggers top 100 muestra las alertas que han cambiado su estado con mayor frecuencia dentro del período de evaluación.

- **Audit**. La sección Audit muestra los registros de los cambios realizados en la interfaz.

- **Action log**. La sección Action log muestra los detalles de las operaciones (notificaciones, comandos remotos) ejecutados dentro de una acción.

- **Notifications**. La sección Notifications muestra un informe sobre el número de notificaciones enviadas a cada usuario.

### Configuration
El menú Configuration contiene secciones que permiten configurar las principales funciones de Zabbix, como hosts y grupos de hosts, recopilación de datos, alertas, envío de notificaciones, etc. Al hacer clic sobre esta opción, aparecen las siguientes secciones:
![alt text](../img/zabbixFrontend5.png)

- **Host groups**. La sección Host groups muestra el listado de grupos de equipos existentes. Desde aquí se gestionan los grupos de equipos.

- **Templates**. La sección Templates muestra el listado de plantillas existentes. Desde aquí se gestionan las plantillas.

- **Hosts**. La sección Hosts muestra el listado de equipos existentes. Desde aquí se gestionan los equipos monitoreados.

- **Maintenance**. La sección Maintenance muestra el listado de los períodos de mantenimiento existentes. Desde aquí se gestionan los mantenimientos para Zabbix.

- **Actions**. La sección Actions muestra el listado de acciones asociadas al origen de un evento. Desde aquí se gestionan las acciones.

- **Event correlation**. La sección Event correlation muestra el listado de eventos de correlación existentes. Desde aquí se gestionan los eventos de correlación.

- **Discovery**. La sección Discovery muestra el listado de las reglas de descubrimiento existentes. Desde aquí se gestionan las reglas de descubrimiento.

- **Services**. La sección Services muestra el listado de servicios de alto nivel relacionados con la SLA (Service Level Agreement). Desde aquí se gestionan los servicios.

### Administration
El menú Administration contiene secciones que permiten personalizar los aspectos internos de Zabbix. Al hacer clic sobre esta opción, aparecen las siguientes secciones:
![alt text](../img/zabbixFrontend6.png)

- **General**. La sección General contiene varias pantallas para configurar los valores predeterminados relacionados con la interfaz y la personalización de Zabbix.

- **Proxies**. La sección Proxies muestra el listado de servidores proxy existentes. Desde aquí se gestionan los servidores proxy para una monitorización distribuida.

- **Authentication**. La sección Authentication contiene los metodos de autenticación en Zabbix. Desde aquí se gestionan los métodos (Internal, HTTP, LDAP).

- **User groups**. La sección User groups muestra el listado de grupos de usuarios existentes. Desde aquí se gestionan los grupos de usuarios.

- **Users**. La sección Users muestra el listado de usuarios existentes. Desde aquí se gestionan los usuarios de Zabbix Frontend.

- **Media types**. La sección Media types muestra el listado de medios disponibles para enviar notificaciones a los usuarios cuando se produce un evento. Estos pueden ser SMS, Email, Jabber.

- **Scripts**. La sección Scripts muestra el listado de scripts existentes. Desde aquí se gestionan los scripts a ejecutar sobre Zabbix.

- **Queue**. La sección Queue muestra el listado de valores de monitoreo que están pendientes de ser refrescados.
