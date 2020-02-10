---
id: activacionSNMP
title: Activación SNMP
sidebar_label: Activación
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
## Ingreso a la Consola
Hay dos formas para ingresar al Switch:
- Via Telnet (Telecommunication Network)
- Mediante el puerto de consola del dispositivo.

Para este caso se utilizará un cliente Telnet (Putty).
![alt text](../img/putty.png 'Putty')

Al conectarse al Switch se pedirá la contraseña del dispositivo. Ingresar la contraseña y presionar la tecla **_Enter_** para continuar.
![alt text](../img/consola1.png 'Ingreso a la Consola')

## Modo Privilegio
Para realizar cambios en el dispositivo se debe estar en modo privilegiado. Ingresar el siguiente comando y la contraseña del dispositivo.

```console
enable
```

![alt text](../img/consola2.png 'Modo Privilegiado')

> El símbolo **_#_** indica que se encuentra en Modo Privilegiado.

## Información SNMP
Se puede ver la configuración en ejecución y la información SNMP ingresando el siguiente comando:

```console
show running-config
```

![alt text](../img/snmp1.png 'Información Switch')

> Si no hay información SNMP presente, continúe con estos pasos. Si hay algunos comandos SNMP registrados, se pueden modificar o deshabilitar.

## Modo Configuración
Para configurar el dispositivo se debe estar en modo configuración. Ingresar el siguiente comando:

```console
configure terminal
```

![alt text](../img/snmp2.png 'Modo Configuración')

> **_(config)#_** indica que se encuentra en modo configuración. Los comandos se ingresan uno por línea.

## Configuración SNMPv3
Se requiere configurar lo siguiente:

1. **Grupo.** Especifica el nivel de seguridad que se va a utilizar.

    ### Niveles de seguridad
    | Nivel        | Descripción |
    | :----------: | ----------- |
    | noAuthNoPriv | Comunicación sin autenticación y sin privacidad |
    | authNoPriv   | Comunicación con autenticación y sin privacidad. Los protocolos que se utilizan para la autenticación son MD5 y SHA (Secure Hash Algorithm). |
    | authPriv     | Comunicación con autenticación y privacidad. Los protocolos que se utilizan para la autenticación son MD5 y SHA y para la privacidad son DES (Data Encryption Standard) y AES (Advanced Encryption Standard). |

2. **Usuario.** Pertenece al grupo anterior.

3. Apuntar el servidor NMS para las notificaciones.

### Crear grupo
```console
snmp-server group [nombre_grupo] [versión {v1 | v2c | v3 }] [nivel {auth | noauth | priv}]

```

### Crear usuario
```console
snmp-server user [nombre_usuario] [nombre_grupo] [versión {v1 | v2c | v3 }]  [autenticación {auth md5 | auth sha} [contraseña]] [privacidad {priv des | priv aes 128} [contraseña]]
```

### Configuración notificaciones del servidor destino
```console
snmp-server host [IP_servidor] traps version 3 [nivel {auth | noauth | priv}] [nombre_usuario]
```

```console
snmp-server enable traps
```

Salir del modo de configuración y regrese al menú principal ingresando **_exit_** en la consola.

![alt text](../img/snmp3.png 'Conffiguración SNMP')

### Guardar configuración
Se debe escribir la configuración modificada en la RAM no volátil (NVRAM) para guardar la configuración. Ingrese el siguiente comando:

```console
write memory
```

![alt text](../img/snmp4.png 'Guardar configuración')


## Verificación SNMPv3
Para verificar la activación del protocolo SNMPv3 se utiliza el comando **_show snmp_**.

```console
show snmp group
```

![alt text](../img/snmp5.png 'Verificación SNMPv3')

```console
show snmp user
```

![alt text](../img/snmp6.png 'Verificación SNMPv3')

> Para ingresar estos comandos se debe estar en modo privilegio **_enable_**
