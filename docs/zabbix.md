---
id: zabbix
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
Esta sección cubre la instalación, configuración y administración de **Zabbix 4.0**. La información incluye instrucciones e imágenes paso a paso.

## ¿Qué es Zabbix?
<center><img src="../img/zabbixLogo.png" width="50%"/></center>
<br></br>

**Zabbix** es una herramienta de código abierto que permite monitorear y registrar en tiempo real la disponibilidad, el uso de recursos, los parámetros de red y el estado de los dispositivos, servidores, aplicaciones y base de datos. Zabbix utiliza un mecanismo de notificación flexible que permite configurar medios de envio como correo electrónico, SMS, Jabber o scrips persolnalizados. Esto asegura una reacción rápida ante cualquier evento.

## Arquitectura
<center><img src="../img/ArquitecturaLógica.png" width="100%"/></center>
Zabbix trabaja en un modelo cliente / servidor. Los cuatro componentes principales son:

- Zabbix Server
- Base de datos
- Zabbix Frontend
- Agentes de Monitoreo

Zabbix Server es el componente central al que los agentes y procesos informan todos los datos recopilados. Toda la información de configuración y datos recopilados se almacenan en la base de datos, con la que tanto Zabbix Server como Zabbix Frontend interactúan. Los agentes Zabbix son compatibles con plataformas como Linux, UNIX y Windows. En los equipos sin agente, se utiliza el protocolo Simple Network Management Protocol (SNMP).

## Requisitos
Asegúrese de que el servidor cumpla con los requisitos de hardware y software:
### Requisitos de Hardware
| Cantidad de Hosts| CPU   | RAM   |
| :--------------: | :---: | :---: |
| 100              | 1 GHz | 1 GB  |
| 500              | 2 GHz | 2 GB  |
| 1000             | 4 GHz | 8 GB  |
| 10000            | 8 GHz | 16 GB |

En cuanto al disco duro, el espacio necesario varía de forma directamente proporcional al tamaño de la Base de Datos.

### Requisitos de Software
#### Sistema Operativo
El sistema operativo del servidor Zabbix puede ser una de las siguientes plataformas:
- Linux
- IBM AIX
- FreeBSD
- NetBSD
- OpenBSD
- HP-UX
- Mac OS X
- Solaris
- Windows

#### Base de Datos
El sistema de gestión de base de datos puede ser una de las siguientes plataformas:
- MySQL versión 5.0.3 o posterior
- Oracle versión 10g o posterior
- PostgreSQL versión 8.1 o posterior
- SQLite versión 3.3.5 o posterior

A nivel de software, los requisitos son:
- Apache versión 1.3.12 o posterior
- PHP versión 5.4.0 o posterior. Igualmente, son necesarias las extensiones de PHP

Use la barra lateral para navegar por el contenido de la sección Herramienta.
