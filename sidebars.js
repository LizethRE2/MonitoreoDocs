/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'inicio',
    },
    {
      type: 'category',
      label: 'Servidor',
      items: ['servidor', 'instalacionS', 'configuracionS'],
    },
    {
      type: 'category',
      label: 'Herramienta',
      items: ['zabbix', 'instalacionH', 'configuracionH', {
        type: 'category',
        label: 'Administración',
        items: ['administracionH', 'agenteZ', 'gruposZ', 'usuariosZ', 'plantillasZ', 'equiposZ', 'reportesZ'],
      },
    ],
    },
    {
      type: 'category',
      label: 'SNMP',
      items: ['snmp', 'activacionSNMP'],
    },
    {
      type: 'category',
      label: 'Copia de Seguridad',
      items: ['copia', 'respaldo'],
    },
  ],
};
