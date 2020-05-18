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
Esta sección cubre la activación del protocolo **SNMP versión 3** en los switch marca Cisco, mediante la interfaz de línea de comandos o CLI(Command Line Interface). La información incluye instrucciones e imágenes paso a paso.

## ¿Qué es SNMP?
<center><img src="../img/SNMPLogo.png" width="30%"/></center>

**SNMP (Simple Network Management Protocol).** Es un protocolo que permite a los administradores de red administrar dispositivos de red y diagnosticar sus problemas.

El protocolo SNMP tiene dos formas de trabajar: polling y traps. El polling se apoya en enviar consultas remotas ya sea de forma activa o bajo demanda, ejecutando una operación síncrona de consulta. Los traps, sin embargo, son más bien mensajes que lanzan los dispositivos SNMP a una dirección ya constituida, basándose en cambios o eventos, esta vez de forma asíncrona.

## Requisitos
Asegúrese de cumplir con los siguientes requisitos antes de comenzar:
- Conexión remota con el dispositivo
- IOS que soporte SNMPv3

> :pushpin: Para asegurarse que el IOS soporte el protocolo y los niveles de cifrado, utilice [ Cisco IOS Feature Navigator tool].(https://cfn.cloudapps.cisco.com/ITDIT/CFN/jsp/SearchBySoftware.jsp "Cisco Feature Navigator - Cisco Systems").

Use la barra lateral para navegar por el contenido de la sección SNMP.
