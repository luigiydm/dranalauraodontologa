export interface Faq {
  pregunta: string;
  /** HTML permitido: <p>, <ul>, <li>, <strong> */
  respuesta: string;
}

export const faqs: Faq[] = [
  {
    pregunta: '¿Qué es una caries dental?',
    respuesta: `<p>La caries dental es una enfermedad que produce la destrucción progresiva de los tejidos del diente, comenzando por el esmalte, que es su capa externa.</p>
<p>Se origina por la acción de bacterias presentes en la placa dental (una película pegajosa que se forma constantemente sobre los dientes). Cuando consumimos alimentos con azúcares, estas bacterias producen ácidos que atacan el esmalte. Si este proceso se mantiene en el tiempo, el esmalte se debilita y se forma la caries.</p>
<p>En sus primeras etapas puede manifestarse como una mancha blanca o más oscura, sin dolor. A medida que avanza y alcanza capas más profundas, puede generar sensibilidad o dolor, especialmente ante estímulos fríos, calientes o dulces.</p>
<p>Si no se trata a tiempo, la caries puede progresar y comprometer estructuras más profundas del diente.</p>`,
  },
  {
    pregunta: '¿Se puede prevenir la caries dental?',
    respuesta: `<p>Sí. La prevención es la herramienta más importante. Medidas principales:</p>
<p><strong>Alimentación</strong></p>
<ul>
<li>Reducir la frecuencia de consumo de azúcares</li>
<li>Evitar alimentos pegajosos que permanecen en los dientes</li>
<li>Priorizar una dieta equilibrada</li>
<li>Evitar bebidas azucaradas en mamaderas en niños</li>
</ul>
<p><strong>Higiene bucal</strong></p>
<ul>
<li>Cepillarse al menos dos veces al día con pasta fluorada</li>
<li>Limpiar entre los dientes con hilo dental</li>
<li>Iniciar la higiene desde la aparición de los primeros dientes</li>
<li>En niños, los adultos deben supervisar el cepillado</li>
</ul>
<p><strong>Controles odontológicos</strong></p>
<ul>
<li>Realizar limpiezas profesionales periódicas</li>
<li>Evaluar la necesidad de flúor o selladores</li>
</ul>
<p>Detectar la caries en etapas tempranas permite resolverla de forma simple y conservadora.</p>`,
  },
  {
    pregunta: '¿Qué son los arreglos o composites?',
    respuesta: `<p>Los composites son materiales del color del diente que se utilizan para reparar piezas dentales afectadas por caries o pequeñas fracturas.</p>
<p>Se adhieren directamente al diente, lo que permite realizar restauraciones más conservadoras, preservando mayor cantidad de estructura dental sana.</p>
<p>Además de su resistencia, ofrecen una excelente estética, integrándose de manera natural con el resto del diente.</p>`,
  },
  {
    pregunta: '¿Qué es la placa bacteriana?',
    respuesta: `<p>La placa bacteriana es una película pegajosa que se forma constantemente sobre los dientes y encías.</p>
<p>Contiene bacterias que, al entrar en contacto con azúcares, producen ácidos que pueden dañar el esmalte dental y provocar caries.</p>
<p>Si no se elimina con una correcta higiene, puede endurecerse y transformarse en sarro, lo que dificulta su remoción y favorece la inflamación de las encías.</p>`,
  },
  {
    pregunta: '¿Qué es el bruxismo?',
    respuesta: `<p>El bruxismo es el hábito involuntario de apretar o rechinar los dientes, que puede ocurrir tanto de día como durante el sueño.</p>
<p>Puede estar relacionado con el estrés, alteraciones del sueño o problemas en la mordida. Síntomas frecuentes:</p>
<ul>
<li>Dolor de mandíbula</li>
<li>Dolores de cabeza</li>
<li>Desgaste dental</li>
<li>Sensibilidad dentaria</li>
</ul>
<p><strong>Tratamiento:</strong> las placas miorrelajantes ayudan a proteger los dientes y reducir la sobrecarga muscular.</p>
<p>El bruxismo no se elimina completamente, pero sus efectos pueden controlarse.</p>`,
  },
  {
    pregunta: '¿Los niños también pueden tener bruxismo?',
    respuesta: `<p>Sí, es relativamente frecuente. En muchos casos no requiere tratamiento, ya que los dientes y la mandíbula están en desarrollo.</p>
<p>Puede estar asociado a:</p>
<ul>
<li>Irritaciones en la boca</li>
<li>Alergias</li>
<li>Alteraciones en la posición de los dientes</li>
</ul>
<p>Ante la duda, es recomendable evaluarlo en consulta.</p>`,
  },
  {
    pregunta: '¿Cómo se cuida una placa miorrelajante?',
    respuesta: `<ul>
<li>Enjuagar o cepillar antes y después de cada uso</li>
<li>Limpiarla periódicamente con agua fría y jabón o productos específicos</li>
<li>Guardarla en un estuche ventilado</li>
<li>No exponerla al calor o al sol</li>
<li>Consultar si presenta desgaste o roturas</li>
</ul>`,
  },
  {
    pregunta: '¿Qué es el flúor y para qué sirve?',
    respuesta: `<p>El flúor es un mineral que ayuda a prevenir la caries fortaleciendo el esmalte dental. Actúa de dos maneras:</p>
<ul>
<li><strong>Tópica:</strong> a través de pastas dentales, enjuagues o aplicaciones en consultorio</li>
<li><strong>Sistémica:</strong> incorporado en el agua y alimentos durante la formación dental</li>
</ul>
<p>También ayuda a reparar lesiones iniciales antes de que se conviertan en caries visibles.</p>`,
  },
  {
    pregunta: '¿Qué es la enfermedad de las encías?',
    respuesta: `<p>Conocida también como enfermedad periodontal, se trata de una infección de los tejidos que rodean y sostienen los dientes, causada principalmente por la acumulación de placa bacteriana. Es una de las principales causas de pérdida dental en los adultos. Como habitualmente es indolora, puede que no sepa que se padece.</p>
<p><strong>Gingivitis</strong></p>
<ul>
<li>Encías inflamadas, enrojecidas</li>
<li>Sangrado al cepillarse</li>
</ul>
<p><strong>Periodontitis</strong></p>
<ul>
<li>Afecta el hueso que sostiene el diente</li>
<li>Puede provocar movilidad o pérdida dental</li>
</ul>
<p>Es posible padecer la enfermedad de las encías y no presentar síntomas de alerta. Es uno de los motivos por los que las revisiones dentales y los exámenes periodontales habituales son muy importantes. Los métodos de tratamiento dependen del tipo de enfermedad y de hasta qué punto haya avanzado la afección. Un buen cuidado dental en casa es fundamental para tratar de evitar que la enfermedad periodontal empeore o se vuelva recurrente.</p>`,
  },
  {
    pregunta: '¿Por qué sangran las encías?',
    respuesta: `<p>El sangrado suele ser un signo de inflamación (gingivitis), generalmente causado por acumulación de placa. Otros signos de enfermedad de las encías pueden incluir:</p>
<ul>
<li>Encías inflamadas</li>
<li>Mal aliento</li>
<li>Retracción de encías</li>
</ul>
<p>Es importante tratarlo a tiempo para evitar que progrese.</p>`,
  },
  {
    pregunta: '¿Cómo prevenir la gingivitis?',
    respuesta: `<p>La correcta higiene bucal es fundamental. Las limpiezas profesionales también son extremadamente importantes pues, una vez que la placa se endurece y acumula, o se transforma en sarro, sólo un odontólogo podrá eliminarla. Se puede ayudar a detener la gingivitis antes que se desarrolle de la siguiente manera:</p>
<ul>
<li>Cepillado correcto y uso de hilo dental</li>
<li>Alimentación equilibrada</li>
<li>Evitar el tabaco</li>
<li>Controles periódicos con el odontólogo</li>
</ul>`,
  },
  {
    pregunta: '¿Qué es la ortodoncia?',
    respuesta: `<p>Es la especialidad de la odontología que se encarga de la corrección de la posición de los dientes y la mordida.</p>
<p>Los dientes mal posicionados o que no encajan correctamente pueden dificultar la higiene, aumentando el riesgo de caries y enfermedades de las encías.</p>
<p>Además, pueden generar una sobrecarga en los músculos de la mandíbula, que con el tiempo puede manifestarse como dolores de cabeza, molestias en la articulación temporomandibular (ATM) y tensiones en cuello, hombros o espalda.</p>
<p>Por otro lado, las alteraciones en la posición dental también impactan en la estética de la sonrisa.</p>`,
  },
  {
    pregunta: '¿Qué diferencia hay entre brackets metálicos y estéticos?',
    respuesta: `<p>Existen dos tipos de brackets que pueden considerarse en función de las necesidades estéticas del paciente.</p>
<p><strong>Metálicos</strong></p>
<ul>
<li>Más resistentes</li>
<li>Más económicos</li>
<li>Tratamientos generalmente más rápidos</li>
</ul>
<p><strong>Estéticos (cerámicos o zafiro)</strong></p>
<ul>
<li>Más discretos</li>
<li>Mejor integración con el diente</li>
<li>Pueden despegarse más fácilmente</li>
<li>Tiempo de tratamiento algo mayor</li>
</ul>`,
  },
  {
    pregunta: '¿Qué es la ortodoncia invisible?',
    respuesta: `<p>La denominada ortodoncia invisible consiste en un moderno y eficaz sistema para enderezar las piezas dentales de manera prácticamente invisible. Se utilizan placas alineadoras removibles y transparentes que alinean las piezas dentales de manera progresiva. La simplicidad del sistema es posible por la sofisticada tecnología empleada en el proceso de diseño y elaboración, el cual combina el diagnóstico y plan de tratamiento enviado por un odontólogo certificado con los avances en tecnología computarizada 3D CAD/CAM.</p>
<p>Las placas alineadoras se usan 22 horas diarias durante tres semanas, luego se descartan y reemplazan por un nuevo juego. Cada nuevo juego de placas trae consigo el siguiente movimiento. De esta manera, las piezas dentales se van moviendo en forma gradual y progresiva hasta alcanzar la alineación ideal.</p>
<p>Entre las ventajas de este tipo de tratamiento podemos destacar:</p>
<ul>
<li>Prácticamente invisibles</li>
<li>Removibles</li>
<li>Permiten una mejor higiene</li>
<li>Tratamiento planificado digitalmente</li>
</ul>`,
  },
  {
    pregunta: '¿En qué consiste la colocación de un implante?',
    respuesta: `<p>La colocación de un implante es un procedimiento que se realiza en el consultorio odontológico, bajo condiciones controladas y con todas las medidas de bioseguridad necesarias.</p>
<p>Se trata de una intervención precisa, planificada previamente mediante estudios y, en muchos casos, apoyada en tecnología digital que permite guiar la colocación del implante de forma segura. Este se integra al hueso y funcionará como base para el futuro diente o prótesis.</p>
<p>Durante el período de osteointegración, se puede colocar un diente provisorio para mantener la estética de la sonrisa.</p>`,
  },
  {
    pregunta: '¿Duele colocarse un implante dental?',
    respuesta: `<p>La colocación de implantes dentales consiste en un procedimiento que se realiza bajo anestesia local y es mucho menos invasivo que una extracción dentaria. Se considera un procedimiento de cirugía dental simple y no conlleva complicaciones en su postoperatorio en la mayoría de los casos.</p>`,
  },
  {
    pregunta: '¿Todos los pacientes pueden colocarse implantes dentales?',
    respuesta: `<p>Los candidatos para un implante dental deben tener encías sanas y hueso adecuado para sostener el implante. Previa colocación del implante el odontólogo debe solicitar análisis de laboratorio de rutina, radiografía panorámica y tomografía computada del maxilar a tratar. Una evaluación completa realizada por un odontólogo ayudará a determinar si el paciente es un buen candidato para colocarse un implante dental.</p>
<p>La edad mínima para la colocación de implantes es 18 años, ya que en esta etapa concluye la osificación de los maxilares, y la edad máxima está determinada por el estado de salud general del paciente.</p>`,
  },
  {
    pregunta: '¿Qué estudios se necesitan para colocar un implante?',
    respuesta: `<p>Previa colocación del implante el odontólogo le solicitará los siguientes estudios:</p>
<ul>
<li>Radiografía panorámica</li>
<li>Tomografía de la zona</li>
<li>Análisis de laboratorio</li>
</ul>`,
  },
  {
    pregunta: '¿Cada cuánto tiempo debo hacer un control odontológico?',
    respuesta: `<p>En general, se recomienda realizar controles cada 6 meses, aunque puede variar según cada paciente.</p>`,
  },
];
