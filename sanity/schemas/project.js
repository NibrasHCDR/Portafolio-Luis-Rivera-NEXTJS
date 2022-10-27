export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: "title",
        title:"Title",
        description: "Title of the project",
        type: "string",
      },


    /* Agregado y Actualizado el 18-10-2022 [Agregamos a la base de datos Cargo(texto) , fechaInnicio(date) y  fechaFin(date) ]*/
      {
          name: "cargo",
          name: "Cargo",
          type: "text",
      },
      {
      name: "fechaInicio",
      title: "FechaInicio",
      type: "date",
     },
     {
      name: "fechaFin",
      title: "FechaFin",
      type: "date",
    },

    {
      name: "trabajaActualmente",
      title: "TrabajaActualmente",
      type: "boolean",
    },




      {
        name: "image",
        title:"Image",
        type: "image",
        options: {
            hotspot: true,
          },
      },
      {
        name: "summary",
        title: "Summary",
        type: "text",
        
      },
      {
        name: "technologies",
        title: "Technologies",
        type: "array",
        of: [{ type: "reference", to: { type: "skill" } }],
      },
      {
        name: "linkToBuild",
        title: "LinkToBuild",
        type: "url",
      },
    ],
  }
  