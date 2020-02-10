---
id: snmp
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
  - SNMP
  - SNMPv3
---
Esta sección cubre la activación del protocolo **_SNMPv3_** en los Switch de marca Cisco, mediante la interfaz de línea de comandos (CLI). Estas páginas se diseñaron para ayudar al administrador de red a implantar el Sistema de Monitoreo.

## ¿Qué es SNMP?
**SNMP (Simple Network Management Protocol).** Es un protocolo que permite a los administradores de red administrar dispositivos de red y diagnosticar sus problemas. El protocolo SNMP tiene dos formas de trabajar: polling y traps. El polling se apoya en enviar consultas remotas ya sea de forma activa o bajo demanda, ejecutando una operación síncrona de consulta. Los traps, sin embargo, son más bien mensajes que lanzan los dispositivos SNMP a una dirección ya constituida, basándose en cambios o eventos, esta vez de forma asíncrona.

<center><img src="../img/SNMP.png"/></center>

## Requisitos Previos
- Conexión remota del Switch
- IOS que soporta protocolo SNMPv3

> Para asegurarse que el IOS soporte el protocolo y los niveles de cifrado, se puede utilizar [ Cisco IOS Feature Navigator tool](https://cfn.cloudapps.cisco.com/ITDIT/CFN/jsp/SearchBySoftware.jsp "Cisco Feature Navigator - Cisco Systems")

Use la barra lateral para navegar por el contenido de la sección SNMP.
