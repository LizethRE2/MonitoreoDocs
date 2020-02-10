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
    //{
      //type: 'category',
      //label: 'Herramienta',
      //items: ['acerca', 'doc2'],
    //},
    {
      type: 'category',
      label: 'SNMP',
      items: ['snmp', 'activacionSNMP'],
    },
    {
      type: 'category',
      label: 'Copia de Seguridad',
      items: ['copia', 'instalacionTFTP', 'respaldo'],
    },
  ],
  //someSidebar: {
    //NM: ['introduccion'],
    //Servidor: ['servidor', 'instalacionS'],
    //Herramienta: ['acerca', 'doc2'],
    //SNMP: ['doc3'],
    //Backup: ['backup', 'mdx'],
    //Introducción2: [
      //'introduccion',
      //{
        //type: 'category',
        //label: 'Docs',
        //items: ['doc1'],
        //},
    //],
  //},
};
