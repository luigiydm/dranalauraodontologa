export interface Bloque {
  titulo?: string;
  parrafos?: string[];
  lista?: string[];
}

export interface SubTratamiento {
  titulo: string;
  bloques: Bloque[];
}

export interface Tratamiento {
  slug: string;
  titulo: string;
  icono: string;
  resumen: string;
  intro: string[];
  bloques?: Bloque[];
  subtratamientos?: SubTratamiento[];
  cierre?: string;
}

export const tratamientos: Tratamiento[] = [
  {
    slug: 'estetica-dental',
    titulo: 'Estética dental',
    icono: 'sonrisa',
    resumen:
      'Mejoramos la apariencia de la sonrisa respetando su naturalidad, evitando intervenciones innecesarias y cuidando la salud y la estructura dental.',
    intro: [
      'Mejoramos la apariencia de la sonrisa respetando su naturalidad, evitando intervenciones innecesarias y cuidando la salud y la estructura dental.',
      'Buscamos resultados estéticos que se integren de manera natural, evitando tratamientos invasivos innecesarios y priorizando la conservación dental.',
    ],
    subtratamientos: [
      {
        titulo: 'Diseño de la sonrisa',
        bloques: [
          {
            parrafos: [
              'El diseño de la sonrisa es un abordaje integral que combina distintas técnicas odontológicas para mejorar la forma, posición, tamaño y color de los dientes, en armonía con las características de cada paciente.',
              'Cada caso se analiza y planifica de manera personalizada, considerando no solo los aspectos dentales, sino también la relación con el rostro y la función. Puede involucrar distintas áreas de la odontología cuando es necesario.',
              'El objetivo es lograr una sonrisa natural, equilibrada y duradera, evitando intervenciones innecesarias y respetando la salud y la estructura dental.',
            ],
          },
        ],
      },
      {
        titulo: 'Blanqueamiento dental',
        bloques: [
          {
            parrafos: [
              'El blanqueamiento dental permite mejorar el color de los dientes y lograr una sonrisa más luminosa, siempre de forma cuidada y progresiva.',
              'Muchas personas logran un buen aspecto con una correcta higiene y limpiezas periódicas. Cuando se busca un cambio mayor, existen tratamientos que permiten aclarar el tono dental de manera segura, bajo control profesional.',
            ],
          },
          {
            titulo: 'Enfoque',
            parrafos: [
              'Evaluamos cada caso de forma individual para determinar si el blanqueamiento es la mejor opción y qué tipo de tratamiento es el más adecuado.',
              'El objetivo es lograr un resultado natural, en armonía con el resto de la sonrisa, evitando cambios artificiales y respetando la salud dental.',
            ],
          },
          {
            titulo: 'A tener en cuenta',
            parrafos: [
              'No todos los tipos de manchas responden de la misma manera al blanqueamiento. Los tonos amarillentos suelen responder mejor, mientras que otras coloraciones pueden requerir alternativas complementarias.',
              'En casos donde existen restauraciones, carillas o coronas es importante considerar que estos materiales no modifican su color, por lo que puede ser necesario evaluar tratamientos complementarios para mantener la armonía estética.',
            ],
          },
          {
            titulo: 'Blanqueamiento en consultorio',
            parrafos: [
              'Se realiza en el consultorio mediante la aplicación de un agente blanqueador, protegiendo previamente las encías y utilizando técnicas que potencian su efecto.',
            ],
            lista: [
              'Procedimiento controlado por el profesional',
              'Sesiones de aproximadamente una hora',
              'En algunos casos puede complementarse con tratamiento domiciliario',
            ],
          },
          {
            titulo: 'Blanqueamiento ambulatorio (en casa)',
            parrafos: [
              'Se realiza con placas personalizadas y geles indicados por el profesional.',
            ],
            lista: [
              'Tratamiento progresivo',
              'Controlado y supervisado durante todo el proceso',
              'Permite adaptar la intensidad según la respuesta de cada paciente',
            ],
          },
          {
            parrafos: [
              'El blanqueamiento dental se indica de manera personalizada, buscando siempre resultados naturales y en equilibrio con el resto de la sonrisa.',
            ],
          },
        ],
      },
      {
        titulo: 'Carillas dentales',
        bloques: [
          {
            parrafos: [
              'Las carillas dentales son láminas delgadas, diseñadas a medida, que se colocan sobre la superficie frontal de los dientes para mejorar su forma, color y proporción.',
              'Se confeccionan con materiales estéticos de alta calidad, como porcelana o resinas compuestas, logrando resultados naturales y armónicos.',
            ],
          },
          {
            titulo: '¿En qué casos se indican?',
            parrafos: ['Pueden ser una opción en situaciones como:'],
            lista: [
              'Dientes manchados o con alteraciones de color',
              'Fracturas o desgastes',
              'Alteraciones en la forma o tamaño',
              'Leves desalineaciones',
            ],
          },
          {
            parrafos: [
              'También se consideran cuando el blanqueamiento dental no logra el resultado esperado, por ejemplo en manchas más profundas.',
            ],
          },
          {
            titulo: 'Enfoque',
            parrafos: [
              'Cada caso se evalúa de manera personalizada, considerando la forma del rostro, la sonrisa y la identidad de cada paciente.',
              'El objetivo no es transformar, sino mejorar la estética de forma natural, respetando la función y la estructura dental.',
              'Siempre que es posible, priorizamos alternativas conservadoras antes de indicar este tipo de tratamiento.',
            ],
          },
          {
            titulo: 'Proceso',
            parrafos: [
              'El tratamiento comienza con un diagnóstico y planificación detallada, que incluye modelos y escaneos digitales.',
              'Las carillas se confeccionan a medida y luego se adhieren al diente mediante técnicas específicas. En algunos casos, es necesario realizar un desgaste mínimo del esmalte para lograr una correcta adaptación.',
            ],
          },
          {
            titulo: 'A tener en cuenta',
            parrafos: [
              'Se trata de un tratamiento que, en la mayoría de los casos, implica una intervención irreversible, por lo que su indicación debe ser cuidadosamente evaluada.',
            ],
          },
          {
            parrafos: [
              'Indicamos carillas dentales cuando son la mejor opción para lograr un resultado estético natural, siempre dentro de un enfoque conservador y personalizado.',
            ],
          },
        ],
      },
      {
        titulo: 'Incrustaciones dentales',
        bloques: [
          {
            parrafos: [
              'Las incrustaciones dentales son restauraciones realizadas a medida que permiten reconstruir dientes dañados, devolviendo su forma, función y resistencia.',
              'Se confeccionan con materiales de alta calidad, como cerámica o resinas reforzadas, logrando una excelente adaptación y un resultado estético natural.',
            ],
          },
          {
            titulo: '¿En qué casos se indican?',
            parrafos: ['Son una opción adecuada cuando:'],
            lista: [
              'Existe pérdida de estructura dental por caries o fracturas',
              'Las restauraciones tradicionales no ofrecen suficiente resistencia',
              'Se busca una solución más duradera y precisa',
            ],
          },
          {
            titulo: 'Enfoque',
            parrafos: [
              'Las incrustaciones forman parte de un enfoque conservador, ya que permiten preservar la mayor cantidad posible de tejido dental sano.',
              'El objetivo es reforzar el diente sin recurrir a tratamientos más invasivos, manteniendo la funcionalidad y la estética en equilibrio.',
            ],
          },
          {
            titulo: 'Proceso',
            parrafos: [
              'El tratamiento comienza con la preparación del diente y la toma de un escaneo digital.',
              'La incrustación se confecciona a medida en laboratorio y luego se adhiere al diente mediante técnicas específicas, logrando una restauración precisa y estable.',
            ],
          },
          {
            titulo: 'A tener en cuenta',
            parrafos: [
              'Al ser una restauración indirecta, requiere planificación y más de una etapa, pero ofrece mayor durabilidad y adaptación que las restauraciones convencionales en determinados casos.',
            ],
          },
          {
            parrafos: [
              'Indicamos incrustaciones cuando permiten resolver el problema de forma más conservadora, duradera y en armonía con el resto de la estructura dental.',
            ],
          },
        ],
      },
      {
        titulo: 'Restauraciones estéticas',
        bloques: [
          {
            parrafos: [
              'Las restauraciones estéticas permiten reparar dientes con pequeñas pérdidas de estructura, devolviendo su forma, función y apariencia de manera natural.',
              'Se realizan con materiales del color de la pieza dental, logrando una integración armónica con el resto de la sonrisa.',
            ],
          },
          {
            titulo: '¿En qué casos se indican?',
            parrafos: ['Son una opción adecuada en situaciones como:'],
            lista: [
              'Caries no extensas',
              'Fracturas o desgastes leves',
              'Reconstrucción de bordes o ángulos dentarios',
              'Cierre de espacios entre dientes (diastemas)',
            ],
          },
          {
            titulo: 'Enfoque',
            parrafos: [
              'Forman parte de un abordaje conservador, ya que permiten tratar el problema preservando al máximo la estructura dental sana.',
              'El objetivo es lograr una restauración estética y funcional, respetando la anatomía natural del diente y evitando intervenciones innecesarias.',
            ],
          },
          {
            titulo: 'Proceso',
            parrafos: [
              'El tratamiento se realiza en consultorio, generalmente en una sola sesión.',
              'Se elimina el tejido afectado y se reconstruye el diente con materiales estéticos que se modelan y adaptan cuidadosamente para lograr forma, textura y color adecuados.',
            ],
          },
          {
            titulo: 'A tener en cuenta',
            parrafos: [
              'Si bien ofrecen muy buenos resultados estéticos, su indicación depende del tamaño y ubicación de la lesión, siendo en algunos casos necesario optar por otras alternativas más duraderas.',
            ],
          },
          {
            parrafos: [
              'Indicamos restauraciones estéticas cuando permiten resolver el problema de forma simple, conservadora y en armonía con el resto de la sonrisa.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'rehabilitacion-oral',
    titulo: 'Rehabilitación oral',
    icono: 'anillos',
    resumen:
      'Abordamos casos de mayor complejidad de forma integral, buscando recuperar función y estética en equilibrio, con resultados duraderos.',
    intro: [
      'La rehabilitación oral es un abordaje integral que permite recuperar la función, la estética y la salud de la boca en casos donde existen múltiples piezas dentales comprometidas.',
      'Combina distintas técnicas y especialidades para devolver equilibrio a la sonrisa, respetando la estructura dental y la biología de cada paciente.',
    ],
    bloques: [
      {
        titulo: '¿En qué casos se indica?',
        parrafos: ['Puede ser necesaria en situaciones como:'],
        lista: [
          'Desgaste dental',
          'Pérdida de piezas dentales',
          'Problemas de mordida',
          'Restauraciones previas defectuosas o inestables',
          'Alteraciones funcionales o estéticas complejas',
        ],
      },
      {
        titulo: 'Enfoque',
        parrafos: [
          'Cada caso se analiza de manera detallada, a partir de un diagnóstico preciso y una planificación personalizada.',
          'El tratamiento puede integrar distintas áreas de la odontología —como implantes, prótesis, restauraciones u ortodoncia— según las necesidades de cada paciente.',
          'El objetivo es lograr una solución integral, funcional y estética, con resultados naturales y duraderos, evitando intervenciones innecesarias y priorizando la conservación de la estructura dental siempre que sea posible.',
          'En pacientes con desgaste dental o bruxismo utilizamos planificación digital para rehabilitar la boca preservando al máximo la estructura dentaria, evitando desgastes innecesarios siempre que sea posible.',
        ],
      },
      {
        titulo: 'Proceso',
        parrafos: [
          'El tratamiento comienza con un estudio completo que puede incluir evaluación clínica, estudios complementarios y planificación digital.',
          'A partir de ese análisis, se define una secuencia de tratamiento por etapas, respetando los tiempos biológicos y buscando estabilidad en el largo plazo.',
        ],
      },
      {
        titulo: 'A tener en cuenta',
        parrafos: [
          'Se trata de tratamientos que requieren planificación, tiempo y seguimiento, pero que permiten resolver problemas complejos de forma integral y predecible.',
        ],
      },
    ],
    cierre:
      'Indicamos rehabilitación oral cuando es necesario recuperar la función y la estética de manera integral, siempre dentro de un enfoque personalizado y conservador.',
  },
  {
    slug: 'implantes-y-protesis',
    titulo: 'Implantes y prótesis dentales',
    icono: 'implante',
    resumen:
      'Reemplazamos piezas dentales integrando soluciones funcionales y estéticas, priorizando siempre la armonía y la estabilidad en el tiempo.',
    intro: [
      'Los implantes y prótesis dentales permiten reemplazar piezas ausentes y recuperar la función de la mordida, la estética y la estabilidad de la sonrisa.',
      'Los implantes se integran al hueso y actúan como soporte para coronas o prótesis, logrando una solución fija, funcional y de aspecto natural.',
    ],
    bloques: [
      {
        titulo: '¿En qué casos se indican?',
        parrafos: ['Los implantes dentales pueden ser una opción cuando:'],
        lista: [
          'Existe pérdida de una o varias piezas dentales',
          'Se busca reemplazar prótesis removibles',
          'Es necesario recuperar función de la mordida y la estética',
          'Se requiere estabilizar una rehabilitación más amplia',
        ],
      },
      {
        titulo: 'Enfoque',
        parrafos: [
          'Cada caso se evalúa de manera individual, a partir de un diagnóstico preciso que considera la calidad ósea, la salud general y las características de la sonrisa.',
          'El tratamiento se planifica cuidadosamente para lograr una integración armónica con el resto de las piezas dentales, respetando la función y la estética.',
          'Siempre que es posible, priorizamos soluciones que conserven la mayor cantidad de estructura dental existente y aseguren estabilidad en el largo plazo.',
        ],
      },
      {
        titulo: 'Proceso',
        parrafos: [
          'El tratamiento comienza con estudios diagnósticos y planificación detallada.',
          'Realizamos cirugía guiada mediante tomografía, escaneo intraoral y planificación digital, lo que permite colocar los implantes con mayor precisión, reducir el trauma quirúrgico y, en muchos casos, minimizar o incluso evitar la necesidad de puntos de sutura.',
          'En algunos casos, el tratamiento puede realizarse en etapas o combinarse con otras técnicas según las necesidades específicas.',
        ],
      },
      {
        titulo: 'A tener en cuenta',
        parrafos: [
          'El éxito del tratamiento depende de una correcta planificación, de las condiciones del hueso y de un adecuado seguimiento.',
          'Requiere controles periódicos y cuidados específicos para mantener la salud de los tejidos y la durabilidad de la rehabilitación.',
        ],
      },
    ],
    cierre:
      'Indicamos implantes y prótesis dentales cuando permiten recuperar función y estética de manera estable y armónica, dentro de un enfoque personalizado y cuidadoso de la salud bucal.',
  },
  {
    slug: 'ortodoncia',
    titulo: 'Ortodoncia',
    icono: 'bracket',
    resumen:
      'Alineamos la sonrisa respetando la funcionalidad y la estructura dental, buscando resultados estéticos y estables.',
    intro: [
      'La ortodoncia es la especialidad que permite corregir la posición de los dientes y mejorar la mordida, contribuyendo a una sonrisa más armónica y a una correcta función.',
      'Los dientes mal posicionados pueden dificultar la higiene, favorecer problemas dentales y generar desequilibrios en la función. Alinearlos no solo mejora la estética, sino también la salud bucal a largo plazo.',
    ],
    bloques: [
      {
        titulo: '¿En qué casos se indica?',
        parrafos: ['Puede ser necesaria en situaciones como:'],
        lista: [
          'Dientes apiñados o separados',
          'Alteraciones en la mordida',
          'Dificultad para higienizar correctamente',
          'Desgaste irregular de los dientes',
        ],
      },
      {
        titulo: 'Enfoque',
        parrafos: [
          'Cada caso se evalúa y planifica de manera personalizada, considerando no solo la alineación dental, sino también la función y la armonía con el rostro.',
          'El objetivo es lograr resultados estéticos y funcionales, estables en el tiempo, evitando tratamientos innecesarios y respetando la estructura dental.',
        ],
      },
      {
        titulo: 'Ortodoncia con brackets',
        parrafos: [
          'Sistema tradicional que utiliza pequeñas piezas adheridas a los dientes para guiar su movimiento de forma progresiva.',
        ],
        lista: [
          'Permite tratar una amplia variedad de casos',
          'Opciones metálicas o estéticas (más discretas)',
          'Resultados predecibles y controlados',
        ],
      },
      {
        titulo: 'Ortodoncia con alineadores transparentes',
        parrafos: [
          'Sistema que utiliza placas removibles y transparentes que permiten alinear los dientes de manera progresiva.',
        ],
        lista: [
          'Prácticamente imperceptibles',
          'Removibles para comer y cepillarse',
          'Tratamiento planificado digitalmente',
          'Permite visualizar la evolución del tratamiento',
        ],
      },
      {
        titulo: 'A tener en cuenta',
        parrafos: [
          'La duración y el tipo de tratamiento dependen de cada caso. El compromiso del paciente y el seguimiento adecuado son fundamentales para lograr resultados estables.',
        ],
      },
    ],
    cierre:
      'Indicamos ortodoncia cuando permite mejorar la función y la estética de forma equilibrada, dentro de un enfoque personalizado y orientado a la salud a largo plazo.',
  },
  {
    slug: 'odontologia-general',
    titulo: 'Odontología general',
    icono: 'diente',
    resumen:
      'Tratamientos orientados a mantener la salud bucal, prevenir y resolver patologías de forma temprana.',
    intro: [
      'La odontología general se enfoca en la prevención, el diagnóstico y el tratamiento de las principales patologías bucales, con el objetivo de mantener la salud dental a lo largo del tiempo.',
      'A través de controles periódicos y tratamientos adecuados, es posible detectar problemas en etapas tempranas y resolverlos de forma más simple y conservadora.',
    ],
    bloques: [
      {
        titulo: 'Enfoque',
        parrafos: [
          'Trabajamos con un enfoque preventivo y personalizado, priorizando siempre la conservación de las piezas dentales y evitando intervenciones innecesarias.',
          'Cada tratamiento se indica a partir de un diagnóstico preciso, buscando soluciones que respeten la función y la estructura dental.',
        ],
      },
    ],
    subtratamientos: [
      {
        titulo: 'Caries',
        bloques: [
          {
            parrafos: [
              'La caries es una enfermedad destructiva de las estructuras del diente, y es también una de las enfermedades más frecuentes de la especie humana.',
              'En el desarrollo de la caries influyen tres factores de riesgo:',
            ],
            lista: [
              'Los azúcares de la dieta',
              'Las bacterias de la boca',
              'La existencia de dientes susceptibles o predispuestos',
            ],
          },
          {
            parrafos: [
              'Además, se necesita la colaboración de un cuarto factor, el tiempo, que es indispensable para que los otros factores actúen.',
              'Inicialmente la lesión se manifiesta como un cambio de color (oscuro o blanquecino) en el esmalte del diente. Cuando la lesión progresa aparece pérdida de sustancia y socavación del esmalte, lo cual da un aspecto de mancha grisácea. Finalmente, el esmalte se rompe y la lesión se hace fácilmente detectable.',
              'Cuando la caries afecta solo al esmalte, no produce dolor. Cuando la lesión avanza y llega al tejido interior del diente es cuando aparece el dolor, que a veces es intenso y se desencadena al tomar bebidas frías y calientes.',
            ],
          },
          {
            titulo: 'Enfoque',
            parrafos: [
              'Detectar y tratar la caries de forma temprana permite resolverla con tratamientos simples y conservadores.',
            ],
          },
        ],
      },
      {
        titulo: 'Enfermedades de las encías',
        bloques: [
          {
            parrafos: [
              'Dentro de las enfermedades de las encías, una de las más comunes es la gingivitis, que corresponde a la inflamación de las mismas. La causa directa de la gingivitis es el acúmulo de placa bacteriana (una película suave, pegajosa y sin color formada por bacterias que se deposita constantemente sobre los dientes y encías).',
              'Si el cepillado y el uso diario del hilo dental no eliminan la placa, la misma produce toxinas que irritan el tejido gingival, causando gingivitis.',
              'En esta primera etapa de la enfermedad el daño puede revertirse, ya que el hueso y el tejido conectivo que sostienen los dientes en su lugar todavía no han sido afectados. Sin embargo, si no se efectúa un tratamiento la gingivitis puede transformarse en periodontitis y provocar daños permanentes a tus dientes y mandíbula.',
            ],
          },
          {
            titulo: 'Enfoque',
            parrafos: [
              'El tratamiento oportuno y el mantenimiento adecuado permiten revertir las etapas iniciales y prevenir complicaciones.',
            ],
          },
        ],
      },
      {
        titulo: 'Endodoncia (tratamiento de conducto)',
        bloques: [
          {
            parrafos: [
              'La endodoncia (conocida también como tratamiento de conducto) es un tratamiento necesario cuando la pulpa (tejido blando dentro de los dientes que contiene los vasos sanguíneos, nervios y tejido conjuntivo) se inflama o enferma.',
              'Las causas de una infección en la pulpa pueden incluir:',
            ],
            lista: [
              'Una caries profunda',
              'Procedimientos dentales repetidos',
              'Un diente roto',
              'Lesiones en los dientes (incluso si no hay una grieta o rotura visible)',
            ],
          },
          {
            parrafos: [
              'Si la pulpa afectada no se elimina podría doler e inflamarse, incluso podría derivar en la necesidad de extraer la pieza dental.',
              'Una endodoncia es un procedimiento que ocasiona poca incomodidad y se lleva a cabo en una sesión generalmente. Durante una endodoncia, el endodoncista (odontólogo que se especializa en tratar el interior de los dientes) elimina la pulpa afectada. La cámara de la pulpa y la endodoncia del diente se limpian y sellan provisoriamente hasta tanto se realice la restauración definitiva a los 45 días posteriores.',
              'Es importante destacar la importancia de realizar la restauración definitiva posterior para evitar tener que incurrir en un re-tratamiento de conducto o eventual extracción del diente.',
            ],
          },
          {
            titulo: 'Enfoque',
            parrafos: [
              'Priorizamos este tratamiento cuando es posible preservar la pieza dental, evitando su extracción.',
            ],
          },
        ],
      },
      {
        titulo: 'Bruxismo y placas de relajación',
        bloques: [
          {
            parrafos: [
              'El bruxismo es un hábito vinculado con apretar o rechinar los dientes excesivamente y puede ocurrir de día o de noche. Algunas personas no sienten síntomas, pero otras pueden experimentar dolores de cabeza, de mandíbula o dentales así como también comenzar a observar desgastes en sus dientes.',
              'Las placas de relajación ayudan a proteger los dientes y reducir la sobrecarga.',
            ],
          },
          {
            titulo: 'Enfoque',
            parrafos: [
              'El tratamiento se adapta a cada paciente, buscando prevenir el daño y mejorar el confort.',
            ],
          },
        ],
      },
      {
        titulo: 'Protectores bucales',
        bloques: [
          {
            parrafos: [
              'Un protector bucal es un dispositivo plástico flexible que se utiliza durante actividades deportivas y recreativas para proteger tu boca de lesiones. La American Dental Association (ADA) recomienda el uso de protectores bucales del tamaño adecuado en personas de todas las edades, para la práctica de cualquier deporte que suponga un riesgo de lesión.',
              'Existen distintos tipos de protectores bucales:',
            ],
          },
          {
            titulo: 'Protectores bucales prefabricados',
            parrafos: [
              'Este tipo de protector es la opción más económica, pero ofrece la menor protección porque se ajusta con una precisión limitada. Puede interferir con el habla y la respiración, porque la mandíbula debe estar cerrada para mantenerlo en su lugar. Un protector bucal prefabricado no se considera aceptable como artículo de protección facial.',
            ],
          },
          {
            titulo: 'Protectores que se adaptan a la boca',
            parrafos: [
              'Estos protectores bucales son un molde que se debe hervir y morder para darles la forma de la boca. El molde está revestido de acrílico o goma. Cuando se lo coloca en la boca del atleta, el material de revestimiento del protector se amolda a los dientes y se fija.',
            ],
          },
          {
            titulo: 'Protectores bucales a medida',
            parrafos: [
              'Estos protectores son hechos a medida por tu odontólogo. Este tipo de protector ofrece la mejor protección, calce y comodidad porque está hecho con un molde profesional que toma la forma de tus dientes.',
            ],
          },
          {
            titulo: 'Enfoque',
            parrafos: [
              'Recomendamos protectores personalizados para asegurar mayor eficacia y confort.',
            ],
          },
        ],
      },
      {
        titulo: 'Cirugía dental',
        bloques: [
          {
            parrafos: [
              'La cirugía dental incluye distintos procedimientos necesarios cuando otras alternativas no son suficientes.',
            ],
          },
          {
            titulo: 'Extracciones',
            parrafos: [
              'Son las más comunes y se realizan cuando el diente tiene una destrucción tal que no sería efectivo ni siquiera un tratamiento de conducto.',
            ],
          },
          {
            titulo: 'Incorporación de relleno óseo',
            parrafos: [
              'Una vez realizada la extracción, en algunas ocasiones se observa falta de tejido óseo en la zona tratada; en ese caso, su odontólogo le recomendará realizar una cirugía para incorporación de relleno óseo para la posterior colocación de implante. El mismo puede ser tejido óseo autólogo (del propio paciente, que se retira de otra zona) u homólogo (bovino o porcino).',
            ],
          },
          {
            titulo: 'Levantamiento de piso de seno maxilar',
            parrafos: [
              'Cuando el paciente lleva mucho tiempo sin reponer una pieza dentaria en el sector posterior del maxilar superior, el hueso que se encontraba en ese lugar se reabsorbe. En ese caso es necesario realizar una cirugía de levantamiento de piso de seno maxilar para poder realizar una colocación de implantes, que consiste en la colocación de relleno óseo dentro de la cavidad de seno maxilar para la posterior o inmediata colocación de implantes.',
            ],
          },
          {
            titulo: 'Otras cirugías',
            lista: ['Cirugía de remoción de quistes', 'Cirugía de remoción de implantes'],
          },
        ],
      },
    ],
  },
];
