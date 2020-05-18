---
id: configuracionH
title: Configuración de Zabbix 4.0
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
  - Nagios
  - Zabbix
---
## Zabbix Server
Ingrese el siguiente comando y presione la tecla **Enter** para abrir el archivo de configuración:
```console
nano /etc/zabbix/zabbix_server.conf
```
![alt text](../img/zabbix4.png)

Línea 92: añada el host de la base de datos.
```console
DBHost=localhost
```
![alt text](../img/zabbix4.1.png)

Línea 128: añada la contraseña de la base de datos.
```console
DBPassword=password
```
![alt text](../img/zabbix4.2.png)
Guarde y cierre el archivo (**_Ctrl + o, Ctrl + x_** para el editor nano).

Inicie, verifique y habilite zabbix-server y zabbix-agent. Ingrese los siguientes comandos y presione la tecla **Enter**:
```console
systemctl start zabbix-server zabbix-agent
```
```console
systemctl status zabbix-server zabbix-agent
```
```console
systemctl enable zabbix-server zabbix-agent
```

Si Firewalld se está ejecutando, permita el acceso de puertos. Ingrese los siguientes comandos y presione la tecla **Enter**.
```console
firewall-cmd --add-port={10051/tcp,10050/tcp} --permanent
```
```console
firewall-cmd --reload
```

## Apache
Ingrese el siguiente comando y presione la tecla **Enter** para abrir el archivo de configuración:
```console
nano /etc/httpd/conf.d/zabbix.conf
```
![alt text](../img/zabbix5.png)

Línea 20: elimine el comentario y cambie la zona horaria de preferencia.
```console
php_value date.timezone America/Bogota
```
![alt text](../img/zabbix5.1.png)
Guarde y cierre el archivo (**_Ctrl + o, Ctrl + x_** para el editor nano).

Para aplicar cambios, reinicie Apache. Ingrese el siguiente comando y presione la tecla **Enter**:
```console
systemctl restart httpd.service
```

## Zabbix Frontend
Acceda a la URL: **http://IP_servidor/zabbix** desde un navegador web.

En la primera pantalla se muestra la página de bienvenida. Haga clic en el botón **[Next step]** para continuar.
![alt text](../img/zabbix6.png)

Verifique que se cumplen todos los requisitos previos de software. Haga clic en el botón **[Next step]** para continuar.
![alt text](../img/zabbix6.1.png)

Ingrese los datos correspondientes para la conexión con la base de datos. Haga clic en el botón **_Next step_** para continuar.
![alt text](../img/zabbix6.2.png)

Ingrese los datos del servidor. Haga clic en el botón **[Next step]** para continuar.
![alt text](../img/zabbix6.3.png)

Verifique el resumen de la configuración. Haga clic en el botón **[Next step]** para continuar.
![alt text](../img/zabbix6.4.png)

Haga clic en el botón **[Finish]** para completar la instalación.
![alt text](../img/zabbix6.5.png)

Una vez finalice la instalación, se puede acceder a Zabbix Frontend. El nombre de usuario predeterminado es **Admin** y la contraseña es **zabbix**.
![alt text](../img/zabbix7.png)
