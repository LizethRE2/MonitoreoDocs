---
id: respaldo
title: Copia de Seguridad
sidebar_label: Copia de Seguridad
hide_title: false
hide_table_of_contents: false
keywords:
  - Sistema de Monitoreo de Red
  - NMS
  - Universidad Francisco de Paula Santander
  - UFPS
  - Centro de Servicios de Información
  - CSI
  - Copia
  - Backup
  - Respaldo
---
## Ingresar a la Consola
Hay dos formas para ingresar al Switch:
- Via Telnet (Telecommunication Network)
- Mediante el puerto de consola del dispositivo

Para este caso se utilizará un cliente Telnet (Putty).
![alt text](../img/putty.png 'Putty')

Al conectarse al Switch se pedirá la contraseña del dispositivo.
![alt text](../img/consola1.png 'Ingreso a la Consola')

## Modo Privilegio
Para realizar cambios en el dispositivo se debe estar en modo privilegiado. Ingresar el siguiente comando y la contraseña del dispositivo.

```console
enable
```

![alt text](../img/consola2.png 'Modo Privilegiado')

> El símbolo **_#_** indica que se encuentra en modo privilegiado.

## Tipos de Memoria
| Memoria | Volátil / No Volátil |
| :-----: | :------------------: |
| RAM     | Volátil              |
| ROM     | No Volátil           |
| Flash   | No Volátil           |
| NVRAM   | No Volátil           |

## Respaldo de Configuración
### Memoria NVRAM
La memoria NVRAM  se utiliza como almacenamiento permanente para el archivo de configuración de inicio (startup-config). Al igual que la ROM, la NVRAM no pierde el contenido cuando se apaga el dispositivo.

Ingresar el siguiente comando y presionar la tecla **_Enter_** para ir a la Memoria NVRAM:

```console
dir nvram:
```

![alt text](../img/copia1.png 'Memoria NVRAM')

### Envió de archivo
Una vez se localiza el archivo startup-config se copia al servidor TFTP. Ingresar el siguiente comando y presionar la tecla **_Enter_** para copiar el archivo:

```console
copy nvram:startup-config tftp
```

Se pediran dos variables para continuar:
- Dirección IP del servidor TFTP
- Nombre del archivo copia

![alt text](../img/copia2.png 'Copia Memoria NVRAM')

## Respaldo de Imagen IOS
### Memoria flash
La memoria flash se utiliza como almacenamiento permanente para el IOS y otros archivos relacionados con el sistema. El IOS se copia de la memoria flash a la RAM durante el proceso de arranque.

Ingresar el siguiente comando para ir a la Memoria Flash:

```console
dir flash:
```

![alt text](../img/copia3.png 'Memoria Flash')

> Cuando el dispositivo tiene interfaz web, aparecerá un directorio y no un archivo .bin. En caso de mostrarse un directorio, se debe ingresar al directorio y volver a ingresar el comando anterior.

![alt text](../img/copia4.png 'Memoria Flash')

Ingresar al directorio e ir a la Memoria Flash:

```console
cd nombre_directorio
```

```console
dir flash:
```

![alt text](../img/copia5.png 'Memoria Flash')

### Envió de archivo
Una vez se localiza el archivo .bin se copia al servidor TFTP. Ingresar el siguiente comando y presionar la tecla **_Enter_** para copiar el archivo:

```console
copy flash: nombredelarchivo.bin tftp
```

Se pediran dos variables para continuar:
- Dirección IP del servidor TFTP
- Nombre del archivo copia

![alt text](../img/copia6.png 'Copia Memoria Flash')
