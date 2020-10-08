var historia = document.getElementById('historia');

function start() {
  historia.innerHTML = `<p>Ya habías pasado en anteriores ocasiones por el Cañón de la Serpiente, cuando ibas en bicicleta a visitar a tu tío Howard en el rancho Red Creek, pero nunca te habías fijado en la entrada de la cueva. Parece como si un desprendimiento de rocas la hubiese dejado al descubierto recientemente.</p>
  <p>El sol de la tarde ilumina la entrada de la cueva, pero su interior permanece en la más absoluta oscuridad. Das unos pasos hacia dentro para hacerte una idea de su tamaño. A medida que te vas acostumbrando a la oscuridad, empiezas a vislumbrar una especie de túnel iluminado débilmente por algún tipo de material fosforescente incrustado en las rocas. Las paredes del túnel tienen una forma suave, como si hubiesen sido modeladas por el curso del agua. Cinco o seis metros más adelante, el túnel describe una curva. Te preguntas a dónde conduce. Das unos pasos más. Te pone nervioso estar solo en un lugar tan extraño. Das la vuelta y sales corriendo al exterior.
  A juzgar por la oscuridad que reina en el exterior, está a punto de desencadenarse una tormenta. De pronto, te das cuenta que el sol ya se ha puesto y que la única iluminación procede de la pálida luna llena. Quizás has debido quedarte dormido un par de horas. Entonces recuerdas algo que todavía te resulta mucho más extraño: la noche anterior, la luna apenas estaba empezando su cuarto creciente.</p>
  <p>Empiezas a dudar del tiempo que has pasado dentro de la cueva. No tienes hambre, ni te parece que hayas podido quedarte dormido. No sabes si intentar volver a casa guiado por la luz de la luna o si esperar a que amanezca para no correr el riesgo de resbalar en el escarpado sendero.</p>
  <button class="btn btn-primary" onclick="opc_1()">Decides volver a casa</button>
  <button class="btn btn-primary" onclick="opc_2()">Decides esperar</button>`
}

function opc_finish(){
  historia.innerHTML = `<p>¡Muchas gracias por jugar!</p><button class="btn btn-primary" onclick="start()">Comenzar de nuevo</button>`
}

function opc_1(){
  historia.innerHTML = `<p>A medida que avanzas hacia el rancho, tienes la sensación de que el sendero no es el que tú recuerdas, aunque desde luego la luz de la luna puede darle un aspecto diferente. De pronto, te das cuenta que no estás caminando por un sendero, sino por algo que se asemeja al cauce seco de un río. Vuelves corriendo a la entrada de la cueva. Miras a tu alrededor y descubres que todo el paisaje ha cambiado. Parece como si una lluvia torrencial hubiese borrado todo el rastro del camino durante el rato que has estado dentro de la cueva, a pesar de que no logras ver un solo charco. Tiemblas; hace frío, mucho más del que corresponde a esta época del año. Te pones la chaqueta que llevabas en la mochila, pero sigues sintiendo un frío terrible.</p>
  <p>Por fin, el paisaje empieza a aclararse. Por el este asoma un poco de luz. Pronto saldrá el sol. Echas un vistazo a tu reloj y descubres que se ha parado, a pesar de que sólo hace unas horas que le has dado cuerda. Parece que nada funcione correctamente.</p>
  <p>Sabes que debes volver al rancho lo antes posible, pero de algún modo, sientes que la única forma de hacer que las cosas vuelvan a ser como antes es retornar al interior de la cueva.</p>
  <button class="btn btn-primary" onclick="opc_4()">sigues hacia el rancho</button>
  <button class="btn btn-primary" onclick="opc_5()">vuelves a entrar en la cueva</button>
  `}function opc_2(){
  historia.innerHTML = `<p>Esperas hasta la mañana siguiente, pero a medida que los rosados jirones del amanecer iluminan el cielo por el este, empieza a soplar un viento helado y amenazador.</p>
  <button class="btn btn-primary" onclick="opc_3()">buscas refugio</button>
  <button class="btn btn-primary" onclick="opc_11()">decides soportar el viento para ver lo que hay a tu alrededor</button>
  `}function opc_3(){
  historia.innerHTML = `<p>Buscas refugio en un hueco entre las rocas para protegerte de las terribles ráfagas de viento y te recuestas en su fondo. De repente, la roca se desmorona y resbalas por una pendiente fangosa hasta un estanque.</p>
  <p>Cuando logras levantarte, calado hasta los huesos, y llegar hasta la hierba que cubre la orilla, el sol brilla con todo su esplendor. Miras hacia las rocas que se elevan por detrás del estanque, pero no logras descubrir por dónde has podido caer.</p>
  <p>Tratas de hacerte una idea de tu situación, cuando de pronto aparece un caballo montado por un caballero con armadura, como los de los libros de historia. La visión te resulta tan inusitada que te dan ganas de echarte a reír. El caballero levanta su casco e irrumpe en sonoras carcajadas.</p>
  <p>— ¡Menudo sitio para tomar un baño! –grita—. De todos modos, opino que ha valido la pena, ¡Has quedado tan limpio como un cerdo!</p>
  <p>Está a punto de caerse del caballo a causa de las fuertes carcajadas.</p>
  <p>— Anda, sube y te llevaré de vuelta al castillo —dice—. Veremos qué se puede hacer para que recuperes un aspecto humano.</p>
  <button class="btn btn-primary" onclick="opc_16()">aceptas volver a caballo al castillo</button>
  <button class="btn btn-primary" onclick="opc_86()">rechazas la invitación e intentas volver a la Cueva del Tiempo</button>
  `}function opc_4(){
  historia.innerHTML = `<p>A medida que aclara el día te das cuenta que no estás en el buen camino. El cañón parece menos profundo y el cauce del río está sembrado de cantos rodados que nunca habías visto. El viento es helado a pesar de estar en pleno verano. Al subir a un terreno más elevado descubres manchas de nieve. Desde un risco, divisas una llanura árida con lagos helados y, a lo lejos, una cadena montañosa con picos cubiertos por la nieve. Empiezas a pensar que no se trata simplemente de que te hayas perdido; te has perdido en el tiempo y, por alguna extraña razón, has sido transportado varios millones de años atrás a la Edad del Hielo.</p>
  <p>Te diriges a una de las colinas que bordean el cañón, buscando un lugar para resguardarte del viento y descubres la entrada de otra cueva. Sientes la tentación de penetrar en ella aunque piensas que deberías seguir andando para ver si de algún modo logras llegar a un sitio conocido.</p>
  <button class="btn btn-primary" onclick="opc_12()">entras en la cueva</button>
  <button class="btn btn-primary" onclick="opc_13()">sigues andando</button>
  <p></p>
  `}function opc_5(){
  historia.innerHTML = `<p>Entras en la extraña cueva y te detienes hasta que logras acostumbrarte a la tenue luz ambarina que ilumina su interior. Gradualmente empiezas a distinguir dos túneles. Uno de ellos, el de la derecha, forma una curva hacia abajo. El otro sube en pendiente hacia la izquierda.</p>
  <p>Se te ocurre que el que desciende puede conducir al pasado y el que sube al futuro.</p>
  <button class="btn btn-primary" onclick="opc_14()">tomas el túnel de la izquierda</button>
  <button class="btn btn-primary" onclick="opc_47()">tomas el túnel de la derecha</button>
  <button class="btn btn-primary" onclick="opc_15()">vuelves a salir de la cueva</button>
  `}function opc_6(){
  historia.innerHTML = `<p>— ¡A la torre con él! —grita el rey.</p>
  <p>Dos caballeros se precipitan sobre ti, te sacan a rastras del aposento y te obligan con sus lanzas a subir los cuarenta escalones de piedra de la torre hasta tu prisión: una diminuta habitación cilíndrica con una pequeña ventana desde la cual se divisa el foso y los campos. El único mobiliario está constituido por un lecho de paja.</p>
  <p>Te das cuenta que has retrocedido hasta la época feudal, en la que el capricho del rey era la única ley válida. No tienes ni la más remota idea de cuánto tiempo te tendrán encerrado en la torre. Sólo tienes una posibilidad de escapar. El foso, a unos siete metros de tu ventana, es bastante profundo y si logras saltar bastante lejos, podrás caer en el agua sin sufrir ningún daño.</p>
  <button class="btn btn-primary" onclick="opc_7()">saltas</button>
  <p>En caso contrario, pasa a la 8.</p>
  `}function opc_7(){
  historia.innerHTML = `<p>Saltas lo más lejos posible, cayendo cada vez más deprisa, hasta zambullirte en el agua llegando hasta el fondo donde el blando fango amortigua tu caída. Al cabo de unos segundos sales a la superficie. Nadas hasta la orilla exterior del foso, ligeramente aturdido pero sin daño alguno, te encaramas hasta el borde y corres a esconderte en el bosque.</p>
  <p>Caminas entre los árboles hasta que pierdes de vista el castillo y, entonces, sales a campo abierto. Encuentras a un campesino y le preguntas dónde puedes pasar la noche.</p>
  <p>—Sube a esa colina y verás el lago Ness —dice—. Allí podrás encontrar algún lugar para guarecerte.</p>
  <p>Sigues sus indicaciones y te diriges hacia un grupo de casas situadas cerca del lago. Empieza a oscurecer y te alegras de encontrar a un pescador que te ofrece cobijo para la noche. Tanto él como su mujer son muy amables contigo; te invitan a quedarte con ellos y ayudarles en la pesca para ganar tu sustento.</p>
  <button class="btn btn-primary" onclick="opc_51()">aceptas</button>
  <button class="btn btn-primary" onclick="opc_57()">decides seguir viajando</button>
  `}function opc_8(){
  historia.innerHTML = `<p>Decides esperar, pero pronto lamentas haberlo hecho. Un guardián viene dos veces al día a traerte la comida, que consiste únicamente en pan moreno y agua. Al cabo de unos días te sientes demasiado débil, incluso para escapar si surgiera la oportunidad.</p>
  <p>Cuando estás a punto de perder las esperanzas de volver a recobrar tu libertad, el guardián entra sonriendo en tu celda.</p>
  <p>—El rey ordena que te vayas —dice—. Tenemos un prisionero mucho más importante. ¡Uno que ha insultado al caballo de su majestad!</p>
  <p>Irrumpe a carcajadas. No sabes si dice la verdad, pero mantiene la puerta abierta señalando hacia afuera. De nuevo en libertad, bajas la larga escalera de piedra hasta el patio principal. El puente levadizo está bajado y no parece haber ningún impedimento para que abandones el castillo.</p>
  <p>Cerca de ti está atado un espléndido alazán que probablemente pertenece a uno de los caballeros del rey. Se te ocurre que podrías recorrer una larga distancia con él antes de que nadie lo echase en falta.</p>
  <button class="btn btn-primary" onclick="opc_9()">montas en el caballo y sales a galope</button>
  <button class="btn btn-primary" onclick="opc_10()">pides refugio al rey</button>
  `}function opc_9(){
  historia.innerHTML = `<p>En un instante, has cruzado el puente y te encuentras galopando por el campo sintiéndote más listo que el rey o sus caballeros. Agitas la mano hacia unos pastores al pasar por su lado y ellos te devuelven el saludo.</p>
  <p>Haces un descanso en la casa de un cabrero muy amable que te obsequia con un magnífico almuerzo.</p>
  <p>— No debes temer al rey —dice—. Es un tonto que se pasa el día sentado bebiendo vino. Su única preocupación consiste en saber a quién debe encerrar en la torre. Hasta sus mismos caballeros se ríen de él y es mucho más probable que se caiga de su trono que tú de tu caballo. ¡Dirígete a la feliz Inglaterra, ya que allí te aguardan grandes acontecimientos! ¡Buen viaje y felices aventuras!</p>
  <p>Tus energías se han repuesto gracias a la buena comida y tu caballo también está dispuesto para partir. Das las gracias efusivamente a tu anfitrión y te dispones a cabalgar hacia nuevas aventuras y una nueva vida, casi un millar de años antes de haber nacido.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_10(){
  historia.innerHTML = `<p>Logras acceder al rey y le das las gracias por dejarte salir de la torre.</p>
  <p>— No tiene importancia —responde—. Haríamos lo mismo por cualquier bribón. Nos has caído bien y tu historia, aunque no tiene ningún sentido, nos ha hecho reír. Seguramente sin saberlo has prestado un servicio a tu rey. Gracias.</p>
  <p>— Haré que te den un caballo y algunas piezas de oro —continúa diciendo—. Vete y haz fortuna. Pero te ordeno que vuelvas cada año a contarnos una aventura tan divertida, por lo menos, como la que ya hemos oído de tus labios.</p>
  <p>— Mi señor —dices.</p>
  <p>— Mi vasallo —responde el rey.</p>
  <p>Te alejas a caballo, con cierta inquietud, pero decidido a sacar el mayor partido posible de tu vida en el año 982.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_11(){
  historia.innerHTML = `<p>Trepas resueltamente por un risco rocoso. El fuerte viento levanta remolinos de nieve y choca violentamente contra tu cuerpo.</p>
  <p>El mundo parece haber cambiado para mal. Si no encuentras pronto una casa o una cabaña con gente que te ayude, no vivirás mucho.</p>
  <p>Meditando sobre tu destino, tropiezas y te caes, hundiéndote en una grieta. Pierdes el conocimiento y, al volver en sí, te encuentras en un lugar más cálido aunque todavía sigues tiritando. Por la pálida luz ambarina deduces que, de algún modo, has ido a parar de nuevo a la Cueva del Tiempo. Hay un pasaje a tu derecha y otro a la izquierda. ¿Será que uno conduce al futuro y otro al pasado?</p>
  <button class="btn btn-primary" onclick="opc_17()">entras en el pasaje de la izquierda</button>
  <button class="btn btn-primary" onclick="opc_18()">entras en el pasaje de la derecha</button>
  `}function opc_12(){
  historia.innerHTML = `<p>Al penetrar en la cueva percibes una luz oscilante y olor a humo. Caminas a lo largo de un tortuoso pasadizo hasta llegar a una amplia cámara. El humo procede de unas vasijas de barro.</p>
  <p>Unos hombres bajos y robustos, con pelo negro, muy lacio y rasgos primitivos, están ocupados pintando sobre las paredes de la cueva. Visten con pieles de animales. Observas que en un rincón hay varios lechos de paja.</p>
  <p>Te quedas paralizado por el miedo cuando los habitantes de la cueva abandonan su trabajo para correr hacia ti con muestras de asombro. El más alto lleva en sus manos una larga liana. Se adelanta como si tuviera intención de agarrarte y atarte con ella.</p>
  <button class="btn btn-primary" onclick="opc_19()">te quedas y tratas de entablar amistad</button>
  <button class="btn btn-primary" onclick="opc_20()">tratas de escapar</button>
  `}function opc_13(){
  historia.innerHTML = `<p>Sigues adelante por un sendero que sube una empinada cuesta. Puedes oír unos fuertes sonidos que llegan desde un barranco cercano; probablemente pertenecen a algún animal de gran tamaño. Trepas a un risco y contemplas uno de los mayores mamíferos terrestres que haya existido jamás: el mamut lanudo. Su impresionante volumen resulta todavía mucho mayor debido a la espesa capa de pelo que le cubre.</p>
  <p>Estás helado, cansado y desesperado. Desde el saliente rocoso en el que te encuentras, a poca distancia del mamut, podrías saltar sobre su lomo, refugiarte en su cálido pelo y dejarte llevar.</p>
  <button class="btn btn-primary" onclick="opc_21()">saltas sobre el mamut</button>
  <button class="btn btn-primary" onclick="opc_22()">sigues a pie</button>
  `}function opc_14(){
  historia.innerHTML = `<p>El túnel de la izquierda forma una espiral, cruzándose con otros túneles. Tomas uno de ellos y empiezas a subir una cuesta muy pronunciada. Al cabo de un rato, trepas por un agujero y sales a un desierto. El calor es sofocante, desde luego superior a los cuarenta grados, pero el sol está a punto de ponerse y pronto empezará a refrescar. A lo lejos se divisa una cadena de montañas que, a pesar de su aparente altura, no están cubiertas de nieve. No tienes ni idea de si estás en el pasado, en el futuro o en el presente. En ese momento, descubres algo asombroso: la arena se funde en un cristal amarillento. Al examinarla con más detalle, notas una oleada de aire todavía más caliente. De pronto, te das cuenta que el sol no se pone, sino que sale. Es imposible que la temperatura a mediodía pueda ser soportada por ningún ser vivo. A medida que el sol asciende, el calor se va haciendo abrasador. La luz es cegadora. Quizás estás presenciando el fin del mundo.</p>
  <button class="btn btn-primary" onclick="opc_71()">Continúa...</button>
  `}function opc_15(){
  historia.innerHTML = `<p>Das la vuelta y sales de la cueva. A estas horas, ya debería estar amaneciendo. Sin embargo, no logras ver ni rastro de luz y tienes que buscar a tientas tu camino hasta la entrada. Tanteas las paredes tratando de encontrar alguna abertura. Tus manos tocan algo húmedo, frío y duro: ¡hielo! La entrada está totalmente cubierta y los bloques de hielo llegan hasta el interior de la cueva.</p>
  <p>Retrocedes, totalmente confuso y desalentado. Desearías estar soñando. Vuelves sobre tus pasos intentando pensar con claridad. Sabes que la única posibilidad de salir de la cueva es seguir uno de los pasadizos que tienes delante.</p>
  <button class="btn btn-primary" onclick="opc_25()">sigues el de la derecha</button>
  <button class="btn btn-primary" onclick="opc_26()">sigues el de la izquierda</button>
  `}function opc_16(){
  historia.innerHTML = `<p>El alegre caballero te ayuda a subir a su caballo y emprende el galope campo a través haciéndote sentir bastante incómodo. Después de recorrer un par de kilómetros llegáis a un gran castillo. El caballo trota alegremente cruzando el puente levadizo hasta el establo.</p>
  <p>— ¡Salta! —dice el caballero.</p>
  <p>Te deslizas por la parte trasera del animal y el caballero te conduce hasta el aposento principal del castillo. Este está abarrotado de sirvientes, consejeros y caballeros. Poco después saludas con una reverencia al rey.</p>
  <p>Después de oír tu relato, el rey con expresión severa se dirige a sus sirvientes, consejeros y caballeros.</p>
  <p>— ¿Alguno de vosotros se ha creído este cuento? —pregunta.</p>
  <p>Todos contestan:</p>
  <p>— No, majestad.</p>
  <p>— Por supuesto que no, majestad.</p>
  <p>— Ahora, dinos la verdad —grita el rey, dirigiéndose a ti.</p>
  <button class="btn btn-primary" onclick="opc_27()">afirmas que estás diciendo la verdad</button>
  <button class="btn btn-primary" onclick="opc_28()">tratas de inventar una historia más verosímil</button>
  `}function opc_17(){
  historia.innerHTML = `<p>Sigues el pasaje de la izquierda. Subes por la pendiente hasta la superficie. Delante de ti se extiende una verde pradera hasta un riachuelo claro, de rápidas aguas y, al otro lado, laderas cubiertas de pinos que se pierden en la distancia hasta unos picos blanqueados por la nieve. Podrías estar en Wyoming en tu propia época. De todos modos, la época a la que has llegado parece bastante tranquila.</p>
  <p>Hay una manada de búfalos paciendo, pero no logras distinguir ninguna casa, valla o carretera, es decir, ningún signo de presencia humana. Puede ser que te encuentres a cientos, quizá miles, de años de tu época.</p>
  <p>Miras hacia arriba. Una de las hinchadas nubes que pueblan el cielo se mueve de una forma muy extraña. ¡Está bajando! Con tus propios ojos presencias el aterrizaje de una nave espacial a sólo unos metros de distancia.</p>
  <button class="btn btn-primary" onclick="opc_29()">te escondes para no ser visto</button>
  <button class="btn btn-primary" onclick="opc_30()">te diriges a la nave espacial</button>
  <p></p>
  `}function opc_18(){
  historia.innerHTML = `<p>Recorres bastante distancia por el pasaje de la derecha con la esperanza de encontrar un túnel que conduzca a tu época. Escoges uno de los muchos pasadizos que cruzan y lo siques. En lugar de subir hasta la superficie, entras en una estancia brillantemente iluminada en el centro de la cual está sentado un anciano con barba.</p>
  <p>— ¡Bienvenido! dice, como si estuviera esperándote.</p>
  <p>— Gracias —respondes—. ¿Puedes ayudarme a regresar a mi época?</p>
  <p>— Ante todo, dime por qué quieres volver a tu tiempo, ¿No te gustaría ir a otro cualquiera? —dice el anciano sonriendo.</p>
  <button class="btn btn-primary" onclick="opc_32()">le dices que deseas volver a tu época para estar con tu familia y tus amigos</button>
  <button class="btn btn-primary" onclick="opc_31()">dices que no quieres correr el riesgo de ir a parar a una mala época</button>
  <button class="btn btn-primary" onclick="opc_33()">le dices que te gustaría conocer otra época, pero sólo si te garantiza que podrás volver a la tuya</button>
  <button class="btn btn-primary" onclick="opc_34()">le preguntas quién es</button>
  `}function opc_19(){
  historia.innerHTML = `<p>Adoptas una actitud amistosa. El hombre que sostiene la liana retrocede y sonríe. Los otros se dirigen a ti dando muestras de simpatía, pero no logras entender lo que dicen ni tampoco ellos pueden entenderte a ti. Te sientes un poco violento, pero contento de estar a salvo y caliente.</p>
  <p>Algunos hombres vuelven a su pintura. Decides intentar comunicarte por medio del dibujo. Te dibujas a ti mismo comiendo y los habitantes de la cueva se ríen, pero te traen un pedazo de carne casi cruda. No tiene muy buen sabor, pero estás tan hambriento que no te importa.</p>
  <p>Poco a poco entablas amistad y aprendes unas cuantas palabras. Unos hombres van de caza y vuelven con carne. Otros hacen ropas con pieles de animales. Ayudas cocinando y limpiando, haciendo todos los días algún dibujo en la pared. Los habitantes de la cueva sienten fascinación por tus dibujos de barcos, aviones y coches, objetos que sólo pueden apreciar como diseños abstractos ya que no pueden comprender cuál es su función.</p>
  <p>Un día reciben la visita de otras gentes. Tú no los habías visto anteriormente, pero tus amigos los reciben calurosamente y celebran una gran fiesta en su honor. Al terminar la comida, la conversación se acalora. Comprendes que están hablando de algún problema serio. Poco a poco se van quedando dormidos. Sales de la cueva para ver si logras averiguar algo. La tierra está cubierta por una espesa capa de nieve y el implacable viento helado levanta remolinos.</p>
  <p>A la mañana siguiente, la gente de la cueva empaqueta sus pertenencias y te recomienda que hagas lo mismo. Sin lugar a dudas, se proponen emigrar a un clima más cálido. Probablemente deberías ir con ellos, pero quieres volver a tu casa y saber que la única posibilidad de lograrlo es encontrando el camino de vuelta a través de la Cueva del Tiempo.</p>
  <button class="btn btn-primary" onclick="opc_35()">vas con la gente de la cueva</button>
  <button class="btn btn-primary" onclick="opc_36()">intentas volver a la Cueva del Tiempo</button>
  `}function opc_20(){
  historia.innerHTML = `<p>No ves ninguna posibilidad de futuro entre estas gentes primitivas, por lo que echas a correr de vuelta hacia la Cueva del Tiempo. Afortunadamente no te persiguen y logras rehacer el camino.</p>
  <p>Estás de nuevo en la cueva, agotado y hambriento. La luz es incluso más tenue que antes y te ves obligado a buscar a tientas el camino. Tropiezas y te caes de cabeza por un terraplén lastimándote ligeramente. Al levantar la vista, ves la luz del día. Poco después sales de la cueva a un terreno cálido y húmedo cercano a  un bosque de frondosos árboles. Pasa volando un pájaro. No sabes en que época estás, pero el paisaje parece bastante agradable.</p>
  <button class="btn btn-primary" onclick="opc_39()">Continúa...</button>
  `}function opc_21(){
  historia.innerHTML = `<p>Cuando caes sobre él, el mamut se sacude como un caballo que ahuyenta las moscas. Empieza a avanzar pesadamente por el valle, aparentemente sin notar que sigues abrazado a su peludo lomo disfrutando del calor y del paseo.</p>
  <p>Llega a un terreno elevado, mordisquea una corteza y sigue adelante. Quizá te lleve hasta algunos habitantes de las cuevas que puedan darte comida y abrigo.</p>
  <p>De pronto, se para y vuelve la cabeza como para oír mejor. Levantas la vista y descubres unas figuras humanas que se acercan desde dos lados distintos. Llevan lanzas y mazas. El mamut empieza a correr y tú te agarras fuertemente. Los cazadores os persiguen dando alaridos. No puedes ver hacia dónde se dirige el animal y temes que los cazadores traten de despeñarlo por algún barranco. Sin embargo, si saltas en plena carrera podrías hacerte mucho daño.</p>
  <button class="btn btn-primary" onclick="opc_40()">saltas</button>
  <button class="btn btn-primary" onclick="opc_41()">sigues agarrado</button>
  `}function opc_22(){
  historia.innerHTML = `<p>Cabalgar sobre un mamut podría ser muy divertido si no estuvieses hambriento, helado y perdido. Además, ¿a dónde te llevaría? Sigues andando, desanimado y triste. Estás a punto de sentarte y ponerte a llorar cuando descubres un agujero en el suelo. Te metes por él a gatas esperando encontrar refugio o un camino hacia la Cueva del Tiempo.</p>
  <p>Desembocas en un túnel cruzado por otros de distintas direcciones. Ahora estás seguro de haber vuelto a la Cueva del Tiempo. Sientes el impulso de seguir el primer túnel que salga a la superficie, pero si quieres volver a tu época tienes que avanzar considerablemente en el tiempo, por lo que piensas que quizá sería conveniente esperar y seguir otro túnel.</p>
  <button class="btn btn-primary" onclick="opc_42()">escoges el primer túnel</button>
  <button class="btn btn-primary" onclick="opc_70()">sigues alguno de los otros túneles</button>
  `}function opc_23(){
  historia.innerHTML = `<p>Entras en el primer túnel y sigues andando hasta que empiezas a pensar que estás dando vueltas en círculo. ¿Tendrá esto algún significado? Quizá el tiempo esté transcurriendo con más lentitud. Estás al borde del agotamiento y empiezas a sentir mucho frío. Descubres una abertura en el techo, a través de la cual brillan las estrellas. Sales a un mundo desierto y desolado. El frío es intenso. Aunque no hace viento, vas a quedarte helado en pocos minutos. El aire casi no tiene consistencia como sucede en las cumbres de las montañas muy elevadas. Respiras con gran dificultad. Elevas la vista hasta el cielo frío y nocturno, cuajado de estrellas; entre ellas logras distinguir un disco del tamaño del sol que emite una pálida luz roja como la de un fuego en extinción.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_24(){
  historia.innerHTML = `<p>Después de recorrer una considerable distancia por el pasadizo, entras en un amplio túnel que tiene tantas posibilidades de devolverte a tu época como cualquier otro. Continúas avanzando y notas que el suelo está formado por arena. Quizá llegues a una playa. De pronto el suelo resbala bajo tus pies y te deslizas sobre la arena levantando una nube de polvo. No puedes parar, el terreno es demasiado inclinado. No hay nada debajo y, al cabo de un instante, te sumerges en aguas profundas. Vuelves nadando a la superficie y tratas de recobrar el aliento. Estás en una gruta sumergida, totalmente cerrada excepto por una pequeña abertura en el techo que deja ver el cielo azul. Vas nadando hasta una gran roca que sobresale del agua.</p>
  <p>La arena es blanca y el agua totalmente transparente. Las rocas están formadas por un material cristalino con delicadísimos tonos azulados. Por un momento, te dejas cautivar por la belleza del paisaje, pero enseguida empiezas a pensar en cómo salir de allí. No existe ninguna posibilidad de trepar hasta la abertura del techo. Decides bucear con la esperanza de encontrar algún pasaje submarino que te conduzca a la libertad. ¡Logras encontrarlo! Pero... ¿podrás llegar hasta el final sin quedarte sin aire?</p>
  <button class="btn btn-primary" onclick="opc_45()">intentas bucear por el pasaje submarino</button>
  <button class="btn btn-primary" onclick="opc_50()">decides esperar</button>
  `}function opc_25(){
  historia.innerHTML = `<p>Tratas de avanzar en medio de la débil luz. Delante de ti encuentras una escalera de cuerda. Te agarras a ella y empiezas a subir. De pronto, oyes un temible crujido y la escalera empieza a vibrar. Te paras, fuertemente agarrado, mientras el ruido se apaga. Sigues subiendo y, al cabo de un rato, notas el aire frío y cortante de la noche. A tu alrededor brillan gran cantidad de luces. Delante hay un gran bloque de hielo. Notas una extraña sacudida, como si la tierra se moviese. Al tocar el suelo descubres que es de madera. Puedes ver el mar más allá de una barandilla. El cielo está cuajado de estrellas que brillan con fulgor inusitado. Te das cuenta de que te encuentras en la cubierta de un barco de gran tamaño.</p>
  <p>Colgado cerca de ti hay un enorme salvavidas que en letras negras reza TITANIC. Sabes que sólo ha existido un barco con ese nombre. En su primer y único viaje chocó con un gigantesco iceberg, hundiéndose en el Atlántico en menos de tres horas.</p>
  <p>Al avanzar por la cubierta del Titanic descubres que por debajo de la línea de flotación el agua entra a raudales en los compartimentos interiores.</p>
  <p>La gente no parece haberse enterado de lo que está sucediendo. El mar tiene el aspecto de una balsa de aceite. En la cubierta inferior, la orquesta toca un vals. No muy lejos, algunos hombres vestidos de negro y mujeres con abrigos de pieles pasean por cubierta.</p>
  <p>— ¡No entiendo por qué el capitán ha parado el barco! —dice una de ellas—. Si llegamos con retraso a Nueva York, presentaré mis quejas a la compañía.</p>
  <button class="btn btn-primary" onclick="opc_52()">intentas encontrar al capitán para advertirle que el barco está a punto de hundirse</button>
  <button class="btn btn-primary" onclick="opc_58()">vuelves a bajar por la escalera para retornar a la Cueva del Tiempo</button>
  `}function opc_26(){
  historia.innerHTML = `<p>Te introduces en el pasaje de la izquierda dejando atrás algún que otro túnel. Ninguno de ellos resulta especialmente atractivo. Decides seguir hasta el final del pasaje.</p>
  <p>Caminas durante horas y horas. Por fin, a lo lejos, aparece una figura que va acercándose. Es una niña con pantalones vaqueros y jersey rojo que lleva una mochila en la espalda. Te dice que se llama Luisa y que se ha perdido mientras exploraba una cueva. Evidentemente, no sabe que está en la Cueva del Tiempo.</p>
  <button class="btn btn-primary" onclick="opc_56()">tratas de ayudar a Luisa a buscar el lugar por donde entró en la cueva</button>
  <button class="btn btn-primary" onclick="opc_59()">le propones que vaya contigo por alguno de los túneles a fin de encontrar una salida</button>
  `}function opc_27(){
  historia.innerHTML = `<p>— Ya sé que suena raro, majestad —dices—. Pero no veo ninguna razón para atraerme vuestra ira inventando una historia falsa.</p>
  <p>El rey vuelve la vista hacia sus cortesanos. Todos ostentan una expresión grave, como si hubieses cometido un delito imperdonable.</p>
  <button class="btn btn-primary" onclick="opc_6()">Continúa...</button>
  `}function opc_28(){
  historia.innerHTML = `<p>— Lamento molestaros con mi presencia, majestad —dices humildemente, tratando de inventar un buen cuento lo más deprisa posible—. Lo cierto es que he sido duramente maltratado por mi padrastro y acudo a ponerme bajo vuestra sabia y justa protección.</p>
  <p>— ¿Quién es tu malvado padrastro? ¿Dónde vive? —pregunta el rey—. Si es tan malo, me gustaría poder contarlo entre mis caballeros —añade riendo, coreado por todos los cortesanos.</p>
  <p>— Vive detrás de esa colina —dices, señalando una elevación cubierta de árboles— y se llama Smith.</p>
  <p>El rey vuelve a reírse.</p>
  <p>— Entonces tu padrastro debe ser un pez –dice— porque detrás de esa colina está el lago Ness.</p>
  <button class="btn btn-primary" onclick="opc_6()">Continúa...</button>
  `}function opc_29(){
  historia.innerHTML = `<p>Piensas que debes haber llegado a un futuro lejano. ¿Se trata realmente de una nave espacial? Si es así, quizá lo más conveniente sería retirarte a una distancia prudencial. Trepas rápidamente por la colina, pensando en cómo has venido a parar a esta extraña época.</p>
  <p>Encuentras un hueco entre las rocas y te metes dentro. Entonces te das cuenta que estás en el fondo de la grieta en la que habías caído en la Edad del Hielo. Aunque quisieses volver a aquella horrible época, no tienes ninguna posibilidad de hacerlo. Sigues andando y, al fin, sales a campo abierto al otro lado de la colina.</p>
  <p>Desde donde estás puedes divisar una gran extensión de terreno rocoso y más bien árido. Una gran muchedumbre se afana en la construcción de un enorme muro. Por todas partes hay carretas tiradas por bueyes, cargadas con grandes bloques de piedra. El muro tiene por lo menos seis metros de altura y se extiende a lo largo de todo el espacio que logras divisar.</p>
  <p>Ves muchas escaleras apoyadas contra el muro con hombres y mujeres subidos en ellas que pasan las piedras hasta la parte superior. Esta visión es casi tan increíble como la nave espacial, ya que al parecer estás presenciando la construcción de la Gran Muralla de China.</p>
  <button class="btn btn-primary" onclick="opc_61()">te diriges a los constructores de la muralla</button>
  <button class="btn btn-primary" onclick="opc_66()">vuelves a la grieta</button>
  `}function opc_30(){
  historia.innerHTML = `<p>Te acercas cautelosamente a la nave espacial y descubres con gran sorpresa que se sostiene a unos treinta centímetros del suelo sin ningún apoyo visible. No tiene motores, tubos de escape, escotillas, tren de aterrizaje, antenas, ni ninguno de los aparatos que se supone que debe llevar una nave espacial. Piensas que debe ser obra de una civilización extremadamente avanzada.</p>
  <p>Con la esperanza de que sus gentes hayan desarrollado el sentimiento de amistad hacia los otros seres, te aproximas a la nave. En ese momento se abre una puerta, pero lo único que logras ver de su interior es una fuerte luz azulada. A través de la abertura aparece un enorme cubo y unas pinzas mecánicas lo depositan en el suelo. La tapa del cubo se levanta, dejando a la vista una especie de lecho donde descansan las figuras dormidas de tres hombres y tres mujeres vestidos con trozos de pieles de animales. Te recuerdan a los dibujos que representan a los primeros habitantes de la tierra. Sientes el impulso de saltar a la nave espacial antes de que se cierre la puerta.</p>
  <button class="btn btn-primary" onclick="opc_87()">lo haces</button>
  <p>En caso contrario, pasa a la 62.</p>
  `}function opc_31(){
  historia.innerHTML = `<p>— Entiendo perfectamente que no quieras visitar otras épocas —responde el anciano—, ya que todas son peligrosas y en cualquiera de ellas te puedes encontrar con mala gente y verte envuelto en desagradables aventuras.</p>
  <p>— Demuestras una gran prudencia y, por lo tanto, estoy dispuesto a ayudarte a volver a tu propia época que, como deberías saber, no es mejor ni peor que las otras.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_32(){
  historia.innerHTML = `<p>— ¿Por qué quieres volver con tu familia y tus amigos? —pregunta el anciano.</p>
  <p>— Porque los echo mucho de menos y no podría soportar no volver a verlos. Además, ellos también deben sentirse tristes sin mí.</p>
  <p>— Piensas en los demás, aparte de en ti mismo —responde——. Esa es una buena razón para volver a tu época. Toma el primer túnel de la derecha y encontrarás la salida. Al parecer, has decidido vivir en una sola época, ¿no es así?</p>
  <p>— Sí —respondes.</p>
  <p>— Entonces, vívela con el máximo provecho—dice el anciano despidiéndote con la mano.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_33(){
  historia.innerHTML = `<p>—¡Ah, eres muy astuto! —dice el anciano—. No te conformas con una sola posibilidad. Bien, te llevaré a otra época y, si no te gusta, me llamas y te devolveré a la tuya, siempre aus nos dé tiempo. Toma el túnel de la derecha.</p>
  <p>Sigues sus indicaciones y, a través del túnel, llegas a la calle de una ciudad. Inmediatamente te das cuenta que está en guerra. A tu alrededor estallan las bombas y los cohetes. Llamas a gritos al anciano para que te haga volver a la cueva, pero ya no dispones de tiempo.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_34(){
  historia.innerHTML = `<p>— Soy un filósofo —responde el anciano—, y decidí escoger la eternidad para tener todo el tiempo del mundo para meditar.</p>
  <p>— ¿Y estás contento con tu decisión? —preguntas.</p>
  <p>— No, porque la filosofía sin el tiempo no es nada. Toma el túnel de la derecha y vuelve a tu época. Haz de tu vida tu propia filosofía.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_35(){
  historia.innerHTML = `<p>Bien abrigado con tus toscas botas y abrigo de pieles, sales poco después de amanecer con los demás, un andrajoso grupo formado por una treintena de hombres, mujeres y chiquillos. Afortunadamente no hay ningún niño pequeño ya que no lograría sobrevivir al duro viaje. El sol asoma tímidamente entre las nubes, el viento es moderado y avanzáis con rapidez en vuestra larga ruta hacia el sur.</p>
  <p>Al cabo de unos cuantos días de viaje, casi todos están al borde del agotamiento. Los cazadores no han conseguido encontrar ninguna presa. No es posible encender un fuego por las noches y la única forma de no quedarse helados es dormir agrupados.</p>
  <p>Sin embargo, una semana después notas que el sol brilla con más calor a mediodía y que la nieve ya no es tan espesa. Parece que después de todo lograréis sobrevivir, aunque debes abandonar toda esperanza de volver a tu propia época.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_36(){
  historia.innerHTML = `<p>Recoges tus escasas pertenencias, de las cuales la más apreciable es un cuchillo hecho de un colmillo de mamut. Dices adiós a tus amigos y te alejas andando con dificultad sobre la nieve intentando rehacer el camino de vuelta a la Cueva del Tiempo. Aunque el frío es muy intenso, el radiante sol aviva tus esperanzas.</p>
  <p>Tu estancia con los habitantes de la cueva te ha fortalecido y tus toscos ropajes de pieles te protegen admirablemente del frío. Logras encontrar el camino a lo largo del cañón y, al cabo de unas horas, alcanzas la entrada de la  cueva, ahora casi totalmente cubierta por la nieve.</p>
  <p>Estás agotado por la larga caminata y te lloran los ojos a causa del fuerte viento. Casi no percibes la gran figura gris agazapada a poca distancia de la entrada de la cueva hasta que llega a ti el aullido gutural del lobo. En ese mismo instante, te enfrentas directamente a su fría y cruel mirada. Sabes que al menor movimiento se abalanzará sobre ti. Tienes que pensar qué vas a hacer antes de cambiar de postura. Es probable que puedas llegar hasta la cueva sin que te alcance; puede que tarde un poco en perseguirte y que te deje tiempo para escapar. También podrías intentar clavarle el cuchillo en la garganta cuando salte.</p>
  <button class="btn btn-primary" onclick="opc_37()">corres hacia la cueva</button>
  <button class="btn btn-primary" onclick="opc_38()">te dispones a luchar</button>
  `}function opc_37(){
  historia.innerHTML = `<p>Lentamente desenvainas tu cuchillo y corres hacia la cueva. El lobo sale disparado detrás de ti. Salta y desgarra tu abrigo de piel de oso. Mientras trata de recuperar el equilibrio, entras en la cueva y te metes por el túnel de la izquierda. El lobo te persigue. Miras por encima del hombro y, tropiezas. En vez de caer al suelo, notas que resbalas por una larga y empinada rampa. Arriba el lobo aúlla furioso. Aterrizas sobre un montón de tierra en el fondo de un pozo, ligeramente conmocionado pero sin daño. Á tu izquierda hay un oscuro pasadizo. Arrojas una piedra y, al cabo de lo que te parece una eternidad, oyes un lejano chapoteo. Afortunadamente, hay otro pasadizo a la derecha que está débilmente iluminado por una luz fosforescente.</p>
  <button class="btn btn-primary" onclick="opc_18()">Continúa...</button>
  `}function opc_38(){
  historia.innerHTML = `<p>Asiendo el largo cuchillo de marfil, avanzas lentamente, paso a paso, hacia el lobo que espera gruñendo aparentemente sorprendido por tu audacia.</p>
  <p>Con un gran salto el animal se lanza sobre ti. Le atacas con el cuchillo, desviando el cuerpo para evitar sus temibles colmillos. Tus cuchilladas dan en el aire, pero el lobo tampoco consigue otra cosa que desgarrar tu abrigo de piel de oso. Se detiene un instante para olerlo y aprovechas para clavar tu cuchillo en su cuello. El lobo gira, te mira con odio y se desploma sobre el suelo con la columna vertebral partida.</p>
  <p>Ahora ya eres un auténtico cazador de la Edad de Piedra. Despojas al animal de su piel y entras en la cueva.</p>
  <p>Sigues el túnel de la derecha pensando que puede devolverte a tu época cuando, de repente, caes hundiéndote más y más deprisa en un pozo que no parece tener fin.</p>
  <button class="btn btn-primary" onclick="opc_60()">Continúa...</button>
  `}function opc_39(){
  historia.innerHTML = `<p>De pronto oyes unos gritos. Te escondes en un matorral. Aparece un animal, seguido por varios hombres con lanzas y hondas. Te figuras que debes encontrarte en alguna época anterior al desarrollo de la civilización. Sigues un sendero que te conduce hasta un claro y allí te tumbas en la hierba para descansar un rato. Al mirar hacia el cielo, descubres una larga franja blanquecina. Te frotas los ojos y vuelves a mirar. ¡Parece la estela de un avión a reacción! Después de todo, puede que te encuentres en tu propia época.</p>
  <p>Cansado de vagar durante varios días por la jungla, llegas a un poblado situado a orillas de un gran río. Cerca hay un aeropuerto y, al cabo de algún tiempo, logras volar hacia tu civilización y ver a tu familia, exactamente un mes después de haber entrado por primera vez en la Cueva del Tiempo. Te alegras de estar de nuevo en casa, aunque te sorprende encontrar a todos mucho más viejos. ¡Ellos también se asombran de que no hayas cambiado nada en once años!</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_40(){
  historia.innerHTML = `<p>Te dejas resbalar por el costado del animal y caes sobre el helado terreno, permaneciendo allí magullado y dolorido mientras el mamut sigue su carrera. De pronto, desaparece de la vista despeñándose por la colina. Los cazadores gritan de contento. Algunos se acercan a ti. Son bajos y musculosos, con mandíbulas prominentes y brillantes ojos. El pelo negro les llega hasta los hombros y van vestidos con pieles.</p>
  <p>Te sientes desamparado pensando en lo que pueden hacer contigo. Sin embargo, enseguida notas que no van a hacerte daño. Te ayudan y te llevan hasta su cueva, donde te ofrecen caldo caliente. Tiene mal sabor pero te hace sentir mucho mejor. Te das cuenta que los hombres de la cueva están dispuestos a aceptarte porque, sin saberlo, has logrado llevar a cabo el rito sagrado de su pueblo al cabalgar valientemente sobre un mamut.</p>
  <p>La vida de las gentes de la cueva es sencilla y dura y, a menudo, echas de menos a tu familia, a tus amigos y a tu época; sin embargo, tu nueva vida es todo lo emocionante y feliz que pudieras desear.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_41(){
  historia.innerHTML = `<p>Te agarras firmemente a los mechones de pelo esperando que el mamut disminuya la velocidad para poder saltar sin sufrir ningún daño. De pronto, el animal se lanza hacia adelante emitiendo un terrible bramido. Te das cuenta que estás cayendo cada vez más deprisa y gritas desesperadamente.</p>
  <p>Miles de años más tarde, el eminente paleontólogo Dr. Carleton Frisbee, al descubrir tus huesos en la excavación de Red Creek se asombra enormemente de tu parecido con un ser del siglo XX.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_42(){
  historia.innerHTML = `<p>Te metes por el primer túnel que encuentras. A medida que avanzas, se va haciendo cada vez más pequeño, por lo que te ves obligado a arrastrarte para seguir adelante. Continúas de este modo por lo menos durante una hora. Por fin, tus esperanzas se ven realizadas ya que percibes el fresco olor de un campo de heno recién cortado.</p>
  <p>Poco después parpadeas ante la brillante luz del sol que ilumina un hermoso valle rodeado de suaves colinas. Cerca de un serpenteante río pacen una docena de vacas y, a lo lejos, se divisa una carretera de tierra. Por ella avanza un caballo arrastrando un carro cargado de heno sobre el cual está sentado un campesino. Se dirigen hacia un gran granero rojo situado en la lejanía. En la dirección opuesta, se puede oír el melancólico silbido de un tren.</p>
  <p>Te das la vuelta y descubres que no estás muy lejos de la vía del ferrocarril. El tren aparece resoplando por la curva, lanzando una negra humareda producida por el motor de vapor alimentado con carbón. Desde luego, ya no estás en la Edad del Hielo pero tampoco exactamente en tu época.</p>
  <p>El tren empieza a reducir la marcha. Te sonríes al descubrir el motivo: en la vía hay una vaca que no parece dispuesta a moverse por nada del mundo. El tren frena y de la cabina baja un hombre blandiendo amenazadoramente una pala hacia la vaca, que espera a que éste llegue casi a su lado para volverse tranquilamente hacia el prado. En ese momento, se te ocurre que podrías muy fácilmente subir al tren.</p>
  <button class="btn btn-primary" onclick="opc_72()">subes al tren</button>
  <button class="btn btn-primary" onclick="opc_74()">vas a la granja</button>
  <button class="btn btn-primary" onclick="opc_76()">vuelves al túnel con la esperanza de encontrar el camino hacia tu época</button>
  <p></p>
  `}function opc_43(){
  historia.innerHTML = `<p>Mediante la computadora logras aprender su idioma que te resulta bastante parecido al tuyo. Pronto logras comunicarte con tus anfitriones.</p>
  <p>No demuestran ningún asombro cuando se enteran de que has llegado a través de la Cueva del Tiempo.</p>
  <p>— No eres el primero — dice el cabeza de familia —, aunque las visitas de gentes de otras épocas sólo tienen lugar muy de vez en cuando. Nos interesa mucho conocer la vida de otras épocas porque nosotros hemos logrado una especie de paraíso: nadie trabaja y el mundo está en paz. Nuestra sociedad es perfecta. Por eso, las épocas primitivas como la tuya nos llaman poderosamente la atención.</p>
  <button class="btn btn-primary" onclick="opc_44()">te quedas en la “sociedad perfecta”</button>
  <button class="btn btn-primary" onclick="opc_46()">intentas volver a la Cueva del Tiempo</button>
  `}function opc_44(){
  historia.innerHTML = `<p>Tus anfitriones te alojan en una hermosa habitación con grandes ventanales que dan a un parque. En una de las paredes hay una agradable reproducción de la costa de California. Si aprietas un botón, se enrosca dejando a la vista una gran pantalla. Dispones de una computadora que te permite seleccionar cualquier película o programa entre más de 10.000 posibilidades. Incluso hay películas en las que tú eres el protagonista principal y puedes decidir el desarrollo de las aventuras. Si no te gusta el curso de la acción puedes volver al punto de partida y elegir otra opción.</p>
  <p>La computadora también sirve para jugar y proyectar páginas de libros o de revistas en la pantalla. Tu vida puede ser muy agradable incluso sin levantarte de la cama.</p>
  <p>De vez en cuando sales a explorar. Conoces a otras gentes, pero no te interesan demasiado por lo que pasas la mayor parte del tiempo disfrutando de las mejores películas de todos los tiempos. Poco a poco te acostumbras a tu nueva vida. Sin embargo, hay algo que te preocupa; no se han hecho nuevas películas desde hace 300 años.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_45(){
  historia.innerHTML = `<p>Respiras profundamente, te sumerges y buceas por el túnel. Puedes ver luz delante de ti. En poco tiempo logras salir a la superficie en una hermosa cala. Entre las palmeras que bordean la playa de blanca arena hay varias cabañas de paja. La suave y cálida brisa te trae aromas de jazmín y el sonido de una extraña melodía de tambores. En el mar hay una flotilla de barquichuelas con velas multicolores que navegan impulsadas por el viento. Sus tripulantes se apoyan contra la botavara para mantener las velas hacia afuera.</p>
  <p>Andas hacia el poblado. Algunas gentes de piel morena y rasgos agradables advierten tu presencia. Unos se alejan corriendo, pero los demás se acercan a ti saludándote con las manos. Dos niños vienen corriendo con guirnaldas de flores. Todos dicen “¡Aloha!”.</p>
  <p>Poco después te encuentras sentado ante un gran fuego donde se asan cangrejos, y se comen ricos pasteles. Nunca habían tenido visitas y están muy contentos de verte. Te dan la bienvenida y los niños te aceptan como hermano. Poco a poco logras aprender su lengua.</p>
  <p>La vida en este paraíso es deliciosa, pero todavía piensas en la posibilidad de volver a la Cueva del Tiempo. Tus nuevos amigos no pueden ayudarte. Quizá, en el interior, haya alguien que pueda hacerlo. Sin embargo, el viaje no es aconsejable. Los habitantes de la playa te dicen que sólo encontrarás junglas terribles y ríos plagados de cocodrilos.</p>
  <button class="btn btn-primary" onclick="opc_48()">te quedas con tus nuevos amigos</button>
  <button class="btn btn-primary" onclick="opc_49()">viajas hacia el interior</button>
  `}function opc_46(){
  historia.innerHTML = `<p>La sociedad perfecta del futuro es bastante aburrida, lo que te hace desear volver a tu época cuanto antes. Despidiéndote apresuradamente, vuelves corriendo al túnel, entras en él y tomas un ramal a la derecha con la esperanza de que te conduzca a tu época. Al poco tiempo, sales a la superficie terriblemente nervioso por saber qué es lo que te espera fuera.</p>
  <p>La oscuridad es absoluta y sopla un viento gélido. Tomas asiento resueltamente, decidido a esperar a que amanezca para ver en qué mundo estás. Mientras tanto, no encuentras el sistema de averiguar qué hora es, ni consultando tu reloj ni observando las estrellas.</p>
  <p>A tu alrededor oyes unos fuertes chasquidos. No logras descubrir su procedencia. Cuando la luz rosácea de la aurora empieza a iluminar el cielo por el este, te enfrentas con un extraño ser, cuyo tamaño es parecido al de una oveja pero con un aspecto totalmente diferente.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_47(){
  historia.innerHTML = `<p>Sigues el túnel hacia abajo durante una corta distancia. Resbalas, te golpeas la cabeza con algún objeto y pierdes el conocimiento.</p>
  <p>Cuando vuelves en sí, te encuentras cerca de un pequeño lago rodeado de bosques. El único ser humano a la vista es un muchacho de unos doce años que está pescando. Te acercas y entablas conversación con él, con la esperanza de averiguar en qué año estás sin que le resultes extraño.</p>
  <p>Afortunadamente, el muchacho resulta ser muy amable. Dice que se llama Nick Tyler y que vive en la calle Birch. Ayuda a su padre en la fabricación de jabones y velas, según él los mejores de las colonias.</p>
  <button class="btn btn-primary" onclick="opc_79()">le dices que vienes del futuro</button>
  <button class="btn btn-primary" onclick="opc_80()">intentas idear una historia más creíble</button>
  `}function opc_48(){
  historia.innerHTML = `<p>Tus amigos comprenden que deseas volver a tu época y para distraerte se ofrecen a enseñarte algo con lo que nunca habrías podido soñar. Teniendo en cuenta que su civilización es muy primitiva, no logras imaginarte qué puede ser.</p>
  <p>Al día siguiente te llevan a otra cala donde las olas rompen contra el acantilado, levantando altas columnas de espuma. Unos jóvenes se deslizan en las crestas de las olas sobre unas pequeñas planchas; se trata nada menos que de tablas de surf. En pocas horas, aprendes este excitante y divertido deporte.</p>
  <p>Con semejantes delicias pronto pierdes el interés por volver a tu época. De vez en cuando te preguntas, aunque sin encontrar respuesta, si este paraíso pertenecerá al futuro o al pasado.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_49(){
  historia.innerHTML = `<p>Dices adiós a tus amigos y subes a la sierra que bordea la jungla. Encuentras una senda que, a través de la densa vegetación, penetra en la selva tropical. Las verdes copas de los árboles se pierden en la altura y sólo ocasionalmente dejan pasar un rayo de sol hasta el esponjoso suelo sumido en la oscuridad. Sigues andando y andando con la esperanza de llegar hasta las montañas donde podría haber otra entrada a la Cueva del Tiempo.</p>
  <p>Cuando cae la noche, preparas un tosco lecho utilizando como colchón el suave musgo y como manta un montón de helechos. A la mañana siguiente muy temprano, cuando los pájaros empiezan a cantar, te despierta el abrazo de un boa constrictor que oprime tu cuello.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_50(){
  historia.innerHTML = `<p>Es probable que la única forma de salir de la cueva sea bucear a través del pasaje sumergido, pero el riesgo es enorme. Exploras las rocas de la gruta, pensando en la posibilidad de llegar hasta el techo.</p>
  <p>De pronto alguien dice “¡Hola!”. Te vuelves sorprendido y descubres, acurrucada en una esquina, a una mujer con brillantes ojos azules y una misteriosa sonrisa. Está sentada con las piernas cruzadas en una roca de forma redondeada que le proporciona un cómodo asiento.</p>
  <p>Tiene una flauta en las manos y, mientras tú la observas asombrado, empieza a tocar una extraña melodía de una dulzura y pureza inigualables.</p>
  <p>— ¡Hola! — respondes —. ¿Quién eres? ¿Sabes cómo salir de aquí?</p>
  <p>— Siéntate y descansa — dice —. Tienes todo el tiempo del mundo.</p>
  <p>— ¿Qué quieres decir? Estoy atrapado, he caído desde la Cueva del Tiempo y quiero salir cuanto antes.</p>
  <p>—— Créeme si te digo que no hay forma de salir de aquí — dice la mujer —. Pero no te preocupes, es un lugar muy bello y puedes ser feliz.</p>
  <p>— Pero nos moriremos de hambre. ¿Cuánto tiempo llevas aquí?</p>
  <p>— Estoy aquí desde siempre y desde nunca — responde —. Esta es la parte de la cueva que no conduce ni al pasado ni al futuro. Aquí el tiempo no existe, por lo que no sentirás nunca ni hambre ni cansancio. Aunque no puedes salir, no estarás ningún tiempo aquí.</p>
  <button class="btn btn-primary" onclick="opc_77()">Continúa...</button>
  `}function opc_51(){
  historia.innerHTML = `<p>Aceptas su proposición ya que no se te ofrece nada mejor por el momento. No tardas mucho en empezar a disfrutar de las salidas en barca en medio de las nieblas matutinas para tender las redes con los otros pescadores.</p>
  <p>Una tarde, mientras amarráis los botes en el embarcadero, tu amigo Angus McPhee lanza un penetrante grito señalando al agua. De ella emerge la enorme cabeza de un monstruo acuático: el gran dragón del lago. A su alrededor flotan astillas de madera.</p>
  <p>— ¡Eso era el bote de Sutherland! — grita Angus —. El dragón ha vuelto, al cabo de cien años.</p>
  <p>El monstruo se aleja nadando, perdiéndose en la niebla.</p>
  <p>— ¿Cómo puede desaparecer durante cien años? — preguntas.</p>
  <p>— En alguna parte cerca de la punta Beatty hay una caverna donde el monstruo puede ocultarse todo el tiempo que quiera porque se trata de la Cueva del Tiempo — responde.</p>
  <p>¡Si pudieras volver a la Cueva del Tiempo! Pero las posibilidades son escasas y los riesgos enormes.</p>
  <button class="btn btn-primary" onclick="opc_53()">lo intentas</button>
  <p>En caso contrario, pasa a la 55.</p>
  `}function opc_52(){
  historia.innerHTML = `<p>¿Podrás cambiar la historia y salvar cientos de vidas advirtiendo al capitán que el magnífico Titanic está destinado a hundirse en el fondo del Atlántico? Descubres unas escaleras que suben a la cubierta superior y trepas por ellas a toda velocidad.</p>
  <p>Arriba está parado un camarero.</p>
  <p>— ¡No está permitido subir aquí! — dice.</p>
  <p>Lo esquivas y corres hacia la parte delantera del barco. Subes otras escaleras, yendo a parar al lado de estribor del puente. Allí encuentras al capitán que observa con sus prismáticos un barco que se divisa en el horizonte.</p>
  <p>— ¡Capitán! — gritas —. Puede que usted no lo sepa, pero este barco va a hundirse en un par de horas.</p>
  <p>El capitán se vuelve hacia ti y te mira con gravedad.</p>
  <p>—— Lo sé — dice en voz baja —, pero vamos a lanzar unos cohetes de socorro y ese barco, el Californian, nos prestará ayuda.</p>
  <p>— ¡No lo hará, capitán! — dices —. No creerán que el Titanic esté en peligro a pesar de los cohetes. La única esperanza es mandar una lancha con los hombres más fuertes que remen rápidamente hacia el Californian, mientras se lanzan cohetes a medida que se acercan.</p>
  <p>— Desde luego, es una idea audaz — responde el capitán —, pero necesito a todos mis hombres para bajar las lanchas salvavidas y mantener el orden entre los pasajeros. No puedo creer que el Californian no acuda en nuestra ayuda cuando vea los cohetes.</p>
  <p>— Ahora baja a la cubierta inferior. El señor Lightoller te buscará sitio en una de las lanchas.</p>
  <p>El capitán da la vuelta y se aleja dando órdenes a un oficial. Bajas tristemente las escaleras y te pones en la cola para subir a los botes.</p>
  <p>Dos horas después, apretujado en la atiborrada lancha y helado por la fría brisa, contemplas cómo el grandioso Titanic desaparece en el mar con 1.500 personas a bordo y tus esperanzas de volver a la Cueva del Tiempo.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_53(){
  historia.innerHTML = `<p>Un día que brilla el sol y el agua está todo lo caliente que es posible esperar, tomas un viejo barquichuelo y remas hasta la punta Beatty. Dejas el bote en la cala rocosa que marca la entrada de la cueva. Te sumerges una y otra vez, buceando a lo largo del acantilado que se hunde en las profundidades hasta que encuentras la abertura. Te metes por ella y después de nadar unos cuantos metros sales a la superficie de una enorme caverna, ocupada en gran parte por un lago subterráneo.</p>
  <p>Alcanzas la orilla y empiezas a andar hacia el interior de la caverna que está iluminada por una misteriosa luz azulada. Tus esperanzas se ven realizadas al descubrir un túnel que seguramente conduce a la Cueva del Tiempo. Cerca de ti, sobre la arena, hay tres huevos del tamaño de una pelota de fútbol. Coges uno de ellos y sigues por el túnel. Al cabo de un rato, el aire empieza a hacerse irrespirable. Te sientes mareado y caes inconsciente en el suelo sin soltar el enorme huevo.</p>
  <p>Te despierta una suave brisa que sopla en tu dirección. Ligeramente aturdido te pones en pie, coges el huevo y corres hacia el aire fresco, saliendo al exterior. ¡Estás de nuevo en el Cañón de la Serpiente! Todo está como tú lo recordabas y, pocas horas después, entras en el rancho Red Creek donde tu tío se sorprende que estés de vuelta tan pronto.</p>
  <p>Nadie te cree cuando cuentas lo que ha sucedido; sin embargo, enmudecen de asombro ante el enorme huevo.</p>
  <p>— Quizá lleguemos a creer tu historia si este huevo incuba un monstruo — dice tu tío—. Pero mejor será que lo rompas para ver lo que tienes dentro.</p>
  <button class="btn btn-primary" onclick="opc_54()">decides abrir el huevo</button>
  <button class="btn btn-primary" onclick="opc_78()">lo guardas en tu armario con la intención de consultar con un científico</button>
  `}function opc_54(){
  historia.innerHTML = `<p>Delante de tus tíos y de algunos obreros del rancho golpeas cuidadosamente el huevo con un hacha, esperando que se abra, sin que se rompa en pedazos.</p>
  <p>—¡Alto, un momento!—dice tu tío Howard —. Me siento inclinado a pensar que dices la verdad y creo que será mejor que primero lo vea un científico de la universidad.</p>
  <p>Te alegra saber que tu tío piensa de este modo, porque te asusta la responsabilidad de romper un huevo tan extraño, matando posiblemente a un raro monstruo antes de nacer.</p>
  <p>Tu tío llama a un famoso profesor de paleontología que consiente en venir el próximo sábado. Pones el huevo en un cuenco grande encima de la mesa del comedor.</p>
  <p>Al día siguiente es viernes y toda la familia sale para ir al cine. A la vuelta descubrís que la casa ha sido asaltada y que el huevo ha desaparecido. Nadie, ni siquiera la policía, logra encontrar el huevo. Casi todos los que oyen tu historia sonríen pensando que es falsa. Pero tu tío Howard, a pesar de ser un hombre escéptico, sabe que estás diciendo la verdad.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_55(){
  historia.innerHTML = `<p>Parece absurdo pensar que el monstruo del lago Ness se esconda durante cien años en la Cueva del Tiempo. Además, aunque así fuese, probablemente no lograrías bucear a la suficiente profundidad para encontrar la entrada. Por lo tanto, te resignas a vivir de la pesca en el lago.</p>
  <p>Tu nueva vida es soportable, pero no muy interesante. Lo que más te gusta es remar en tu bote durante las mañanas de niebla contemplando el pálido sol rojizo que pugna por brillar a través de la bruma. Una mañana, mientras estás pescando notas un terrible golpe debajo del bote. La popa se inclina hacia arriba y tú sales disparado por la proa yendo a caer en las fauces del monstruo.</p>
  <p>Ese mismo día, tus amigos encuentran los restos del naufragio. Por todo el pueblo la gente comenta que el monstruo ha vuelto.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_56(){
  historia.innerHTML = `<p>Cuando le hablas del lúgubre mundo que has encontrado al salir de la Cueva del Tiempo, Luisa se alegra de que la ayudes a buscar la salida hacia su época.</p>
  <p>— Cuéntame algo de tu mundo. ¿Es América? ¿En qué año vives? — preguntas mientras camináis.</p>
  <p>— Estamos en el año 2022, — responde.</p>
  <p>— ¿Quieres decir que todavía se usan vaqueros en esa época? — dices asombrado.</p>
  <p>—Se han vuelto a poner de moda hace poco — contesta riéndose.</p>
  <p>— Deben haberse hecho muchos adelantos desde mi época. Háblame de los más interesantes.</p>
  <p>— Creo que lo mejor son los carriles para bicicletas. Desde 1997 no han permitido que se construyan carreteras, sólo carriles para bicicletas, de modo que ahora tenemos tantos kilómetros de carriles como de carreteras para coches.</p>
  <p>— ¿O sea que se puede ir en bicicleta por todo el país? — preguntas.</p>
  <p>— Por supuesto. Y no rodeado de autobuses, camiones y conductores desaprensivos, sino a través de los bosques y las llanuras, a lo largo de los desiertos y de los ríos. A veces pienso que me gustaría pasar toda mi vida viajando de este modo. Hay muchos hostales para ciclistas donde se puede dormir cómodamente por muy poco dinero. Los gastos se sufragan mediante los impuestos sobre la gasolina.</p>
  <p>De pronto, notas que el suelo se hunde bajo tus pies. Luisa y tú os caéis. Aterrizáis en la base de un escarpado risco al borde de una carretera. Te preguntas a qué año habréis llegado. Entonces te fijas en un cartel que dice “CADILLAC, el coche del año todos los años”.</p>
  <p>— ¿Qué es un Cadillac? — pregunta Luisa.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_57(){
  historia.innerHTML = `<p>Prefieres pasar el resto de tus días buscando una entrada a la Cueva del Tiempo que establecerte tranquilamente en un pueblo de pescadores. Así que dices adiós a tus amigos y emprendes la marcha campo a traviesa, camino de Londres. Tienes la intención de buscar un barco que te lleve de vuelta a América, aunque sabes que todavía no ha sido descubierta, porque de algún modo tienes que volver al cañón de Red Creek y a la Cueva del Tiempo.</p>
  <p>Al cabo de unas horas te encuentras en un camino que bordea el bosque, cuando unos hombres fornidos salen a caballo de detrás de un grupo de árboles.</p>
  <p>— ¡Ya te tenemos! — grita uno de ellos —. Tú eres el que se escapó de la torre, ¿verdad?</p>
  <p>Te obligan a subir a un caballo y te conducen a toda velocidad hacia el castillo.</p>
  <p>—El castigo por escapar de la torre es la horca — afirma uno de los hombres.</p>
  <p>Pronto descubres que lo que dice es verdad.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_58(){
  historia.innerHTML = `<p>No quieres correr el riesgo de hundirte con el Titanic, así que vuelves a bajar la escala con la esperanza de volver a la cueva. Con las prisas, sueltas la cuerda y te caes. Extiendes los brazos, pero ya es demasiado tarde. Al llegar al suelo, te golpeas tan fuertemente que pierdes el conocimiento. Cuando despiertas, te encuentras en uno de los pasadizos de la cueva.</p>
  <button class="btn btn-primary" onclick="opc_65()">exploras el pasadizo</button>
  <button class="btn btn-primary" onclick="opc_67()">decides volver a explorar la salida de la cueva</button>
  `}function opc_59(){
  historia.innerHTML = `<p>— Ya que no logras encontrar tu época, quizá podamos volver a la mía — dices.</p>
  <p>Andáis de vuelta un corto trecho hasta que os encontráis con un túnel más ancho que los otros. Te paras y Luisa te mira interrogativamente.</p>
  <p>— Probemos con éste — dices.</p>
  <p>Después de andar casi una hora, ambos sonreís con alegría al ver luz. Al poco rato salís del túnel a un terreno arenoso de color rojizo que se extiende en forma de cuenco. El aire es fresco y claro, como el de un día de otoño. Te imaginas que puede tratarse del cráter de un volcán extinguido. De pronto, oís un fuerte estruendo detrás de vosotros y tenéis que escapar corriendo de un desprendimiento de tierra que cierra el túnel de la Cueva del Tiempo.</p>
  <p>— ¿En qué año estaremos? — pregunta Luisa cuando lográis recuperaros.</p>
  <p>Por primera vez miras hacia el cielo. El sol es cuatro veces mayor del tamaño habitual, pero mucho menos brillante. Aunque está casi encima de vuestras cabezas tiene un color rojo óxido.</p>
  <p>— No lo sé — respondes —, pero por lo que he leído de astronomía, supongo que debe hacer unos cuatro billones de años que tuvo lugar el año 2000.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_60(){
  historia.innerHTML = `<p>Lentamente recuperas el sentido. Estás en tu cama en el rancho Red Creek contemplando a tu tío Howard. A su lado está un médico amigo suyo.</p>
  <p>— Tuviste una mala caída trepando por esas rocas del cañón — dice tu tío Howard —. El doctor Parsons dice que no entiende cómo no te has roto ningún hueso. Estábamos muy preocupados pensando que te habías perdido en una de esas cuevas.</p>
  <p>Te sientes un poco aturdido y muy débil, así que te limitas a sonreír sin decir nada. De todos modos, seguro que nadie te creería. No obstante, años después escribes un libro acerca de tus aventuras en la Cueva del Tiempo.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_61(){
  historia.innerHTML = `<p>Te acercas a la muralla, caminando hacia los trabajadores. Cuando se dan cuenta de tu presencia, piensan que eres un espía de alguna tribu desconocida. Eres capturado por dos guardias que te obligan a sentarte en una pila de piedras mientras deciden qué hacer contigo.</p>
  <p>Al cabo de un rato te señalan una de las escaleras. Dos trabajadores te obligan a trasladar piedras. Te das cuenta que has sido condenado a trabajar en la construcción de una muralla de seis metros de altura, cuatro de ancho y más de 2.800 kilómetros de largo. Calculas que harán falta más de diez billones de piedras. Te preguntas cuántas tendrás que acarrear antes de poder escapar, si es que algún día llegas a hacerlo.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_62(){
  historia.innerHTML = `<p>Aunque te gustaría enormemente ver el interior de la nave, no tienes el más mínimo deseo de ser lanzado al espacio. Te retiras a una distancia prudencial y esperas a ver qué sucede. Poco después, la puerta se cierra y, casi inmediatamente, la nave se eleva en silencio. En pocos minutos se pierde de vista. Te acercas para observar más detenidamente a los hombres de aspecto primitivo dormidos sobre el jergón. Empiezan a desperezarse, frotándose los ojos como si se despertasen de un largo sueño.</p>
  <button class="btn btn-primary" onclick="opc_64()">te quedas y tratas de entablar amistad con las gentes primitivas</button>
  <button class="btn btn-primary" onclick="opc_63()">vuelves a la colina intentando entrar de nuevo en la Cueva del Tiempo</button>
  `}function opc_63(){
  historia.innerHTML = `<p>Subes corriendo la colina para alejarte de los hombres primitivos antes de que se despierten.  Tienes que encontrar una entrada a la Cueva del Tiempo. Buscas alguna abertura entre las rocas. Pasan las horas y el crepúsculo avanza con rapidez. Cuando ya empiezas a perder las esperanzas, descubres la entrada a una cueva debajo de unos peñascos. Te metes dentro a toda velocidad y sólo tienes un momento de lucidez para comprobar que estás en la madriguera de un tigre de las nieves.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_64(){
  historia.innerHTML = `<p>Los hombres primitivos miran a su alrededor con curiosidad. No parecen notar tu presencia. Se incorporan y echan a andar. Uno de ellos bebe del arroyo. Emiten curiosos gruñidos y chasquidos, aunque no parece que realmente estén hablando entre ellos. El más alto del grupo coge un palo y empieza a buscar raíces por la orilla del río. Mordisquea todas las que encuentra y, finalmente, sonriendo pasa una a los otros. Una de las mujeres aplaude. Todos empiezan a buscar palos. Un hombre te alcanza un trozo de raíz. La pruebas y encuentras que su sabor es parecido al de la zanahoria. Las mujeres te sonríen. Te han aceptado como miembro del grupo.</p>
  <p>A la mañana siguiente, te despiertas sobre el suave musgo de la Caverna de la Serpiente, a unos cuantos metros de la entrada de la Cueva, preguntándote si todo lo sucedido es realidad o forma parte de un sueño. De todos modos, no sientes ningún deseo de volver a entrar en la Cueva del Tiempo para comprobarlo.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_65(){
  historia.innerHTML = `<p>Andas y andas con la esperanza de que el pasadizo te conduzca a tu época. Al cabo de un buen rato, llegas a un túnel que desemboca en un aposento húmedo y oscuro que parece ser el sótano de una casa. Hay mucha gente agrupada, sentada sobre mantas en la más completa oscuridad a excepción de la vacilante luz de unas velas. Oyes el lúgubre aullido de unas sirenas. En el centro de la habitación, sobre una mesa, una anticuada radio emite una mezcla de música clásica e interferencias. Las sirenas se apagan, el suelo tiembla y oyes una explosión cercana. Después otra más lejos y, por fin, una tan cerca que una pared y la mitad del techo se vienen abajo, formando un montón de escombros que bloquean la entrada del túnel. Todos corréis hacia el lado opuesto, tosiendo y respirando con dificultad a causa del polvo que llena la habitación.</p>
  <p>Vas a empezar una nueva vida. Corre el año 1940 y estás en Londres.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_66(){
  historia.innerHTML = `<p>No tienes ningún deseo de entrometerte en la construcción de la Gran Muralla de China, ni tampoco de ser trasladado a otro planeta por unos extraños seres. Vuelves a la grieta con la esperanza de encontrar un túnel que te devuelva a tu época. Caminas por el fondo, hasta que descubres una abertura al otro lado de un saliente. Te metes por ella, suponiendo que vas a volver a la verde campiña, al arroyo y a la nave espacial que acabas de abandonar.</p>
  <p>Sin embargo, la grieta va a dar al océano. Como en una pesadilla en la que todo cambia de repente y se convierte en algo diferente, las colinas se han transformado en amenazantes olas. Te encuentras sobre un risco que apenas sobresale unos metros por encima del mar barrido por el viento. No parece existir ninguna posibilidad de escapar, ya que pareces estar sobre el único pedazo de tierra que emerge en el mundo cubierto por las aguas.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_67(){
  historia.innerHTML = `<p>Rehaces el camino a lo largo de la cueva preguntándote si la entrada todavía estará bloqueada por el hielo. Sin embargo, te da la bienvenida una suave brisa que entra desde el exterior. El sol brilla en la entrada y decides salir afuera.</p>
  <p>Parpadeando a causa de la fuerte luz, te encuentras en un mundo totalmente distinto del que habías conocido. Estás en la ladera de una colina, contemplando kilómetros y kilómetros de verdes praderas sembradas de lagos. Cerca hay un bosque de helechos gigantes mecidos por el viento. Todo parece inusitadamente tranquilo, a no ser por el débil retumbar de un trueno lejano. De pronto, el ruido se hace más “fuerte como si la tormenta estuviera acercándose. Notas la vibración en los helechos. Subes corriendo la colina en busca de algún lugar para esconderte. El suelo se oscurece con una sombra enorme. Por encima de tu cabeza, pasa volando un ser mucho mayor que cualquier pájaro conocido.</p>
  <p>Por fin comprendes qué es lo que te ha pasado. La cueva es una fisura del universo, un lugar fuera del espacio y del tiempo. Sus túneles conducen a cualquier lugar y a cualquier época. Si vuelves a entrar corres el riesgo de acabar en algún sitio del cual sea imposible escapar. Sin embargo, es tu única posibilidad de volver a tu época y a tu lugar.</p>
  <button class="btn btn-primary" onclick="opc_68()">vuelves a la cueva</button>
  <button class="btn btn-primary" onclick="opc_69()">te quedas fuera</button>
  `}function opc_68(){
  historia.innerHTML = `<p>De vuelta a la cueva, te sientes confuso y deprimido. Tus ojos no acaban de acostumbrarse a la débil luz. No consigues encontrar ningún pasadizo que te conduzca a otra época. Empiezas a sentirte soñoliento y terminas por dormirte sobre el frío suelo de barro.</p>
  <p>Cuando te despiertas, la cueva sigue estando a oscuras, pero la intensa luz que asoma por la abertura te indica que fuera brilla el sol. Sales y, con sorpresa y felicidad, descubres que te encuentras en el Cañón de la Serpiente y que todo, desde el sendero hasta el bosquecillo de pinos, está tal y como lo habías dejado antes de entrar en la cueva. Incluso el sol está en la misma posición, a punto de desaparecer detrás del cañón. De algún modo, has vuelto a tu época o, para ser más exactos, al momento en que caíste dormido en la cueva.</p>
  <p>Te frotas los ojos y empiezas a bajar por el sendero que conduce al rancho Red Creek con una increíble historia para contar que no olvidarás jamás.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_69(){
  historia.innerHTML = `<p>Pensando que siempre estarás a tiempo de volver a la cueva, decides explorar el mundo que te rodea.</p>
  <p>Caminas a lo largo del saliente rocoso que domina las praderas y los lagos, fijándote en lo que te rodea para poder volver a la cueva.</p>
  <p>A estas alturas empiezas a estar hambriento. Sabes que te encuentras en la época de los reptiles, hace por lo menos 100 millones de años, y que los mamíferos todavía no han hecho su aparición sobre la tierra. No podrás cazar un ciervo o un conejo, pero puede que encuentres algún pez en los lagos. Te preguntas a qué sabrán los huevos de dinosaurio.</p>
  <p>Sigues una amplia senda que cruza a través de los helechos gigantes. Al doblar el primer recodo, te encuentras frente a frente con el horrible Triceratops, un enorme monstruo grisáceo casi oculto por sus cuernos y su escudo. Te observa con curiosidad desde sus apagados ojos pardos. Te das la vuelta corriendo, chocando contra el tronco de un árbol que antes no estaba allí.</p>
  <p>La corteza tiene el tacto de la piel. Cuando miras hacia arriba para hacerte una idea de su tamaño, te encuentras con las fauces del Tyrannosaurus Rex.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_70(){
  historia.innerHTML = `<p>Andas un buen trecho antes de cruzarte con otro túnel. Este conduce directamente a la superficie. Te encuentras con un panorama sorprendente.</p>
  <p>El mundo se ha transformado en un hermoso parque de suave hierba y grandes árboles. Aquí y allá hay grupos de edificios multicolores, rematados en cúpula, unidos por rampas, terrazas y paseos cubiertos. Se te acercan unas personas, vestidas sencillamente con pantalones y camisas de color verde y zapatos marrones. No logras entender su idioma, ni tampoco ellos el tuyo. Se parecen mucho a la gente de tu época, pero son más delgados y musculosos y su aspecto es desusadamente saludable. También son bastante más bajos.</p>
  <p>Te conducen dentro de uno de los edificios y te enseñan un equipo electrónico que tiene la apariencia de una computadora. Al ver una máquina de escribir, te sientas y tecleas un mensaje.</p>
  <p>La computadora imprime una respuesta. Al parecer, tiene acceso a algún banco de memoria donde figura tu idioma. Al poco rato averiguas que estás en el año 3742.</p>
  <button class="btn btn-primary" onclick="opc_43()">Continúa...</button>
  `}function opc_71(){
  historia.innerHTML = `<p>Desciendes de nuevo por el túnel con la esperanza de poder volver a una época anterior.</p>
  <p>Recibes con agrado el aire frío y húmedo que sube desde la cueva. Sientes curiosidad por saber si siguiendo el primer túnel podrías contemplar el estado del mundo antes de ser consumido por el calor del sol en extinción o si, por el contrario, descubrirías qué sucedió después. Supones, sin embargo, que un túnel más lejano tendrá más posibilidades de devolverte a tu época.</p>
  <button class="btn btn-primary" onclick="opc_23()">sigues el primer túnel</button>
  <button class="btn btn-primary" onclick="opc_24()">sigues un túnel más lejano</button>
  `}function opc_72(){
  historia.innerHTML = `<p>Justo cuando el tren vuelve a reemprender la marcha, subes los peldaños del vagón anterior al furgón de cola. Al abrir la puerta, te sorprendes ante unos soldados con uniforme azul que llevan anticuados rifles. Avanzan hacia ti. Uno de ellos sale a ver si te sigue alguien.</p>
  <p>—¿Cómo sabías que éste era el vagón del Presidente? — te pregunta otro soldado.</p>
  <p>— ¿Qué Presidente? — respondes.</p>
  <p>Tú mismo descubres la respuesta a tu pregunta, ya que el hombre alto y con barba que se acerca por el pasillo sólo puede ser Abraham Lincoln.</p>
  <p>— Está bien — dice el Presidente a sus soldados —. Me apetece algo de compañía. Puedes quedarte hasta que lleguemos a Gettysburg — dice, dirigiéndose a ti —, aunque quizá deberías bajar en Parkersville donde conozco a algunas gentes que podrían ayudarte.</p>
  <button class="btn btn-primary" onclick="opc_73()">te quedas hasta Gettysburg</button>
  <button class="btn btn-primary" onclick="opc_75()">bajas en Parkersville</button>
  `}function opc_73(){
  historia.innerHTML = `<p>— Me gustaría quedarme hasta Gettysburg — dices.</p>
  <p>—De acuerdo —contesta el presidente —. ¿Por qué no vienes a sentarte junto a mí? Tengo que escribir un pequeño discurso que voy a pronunciar allí y, mientras lo hago, puedes meditar acerca de lo que piensas hacer, porque después de todo no puedes pasarte la vida viajando en tren.</p>
  <p>Asientes con la cabeza y te quedas tranquilo observando cómo el Presidente escribe unas líneas en un sobre. Al cabo de un rato, levanta la vista y te mira directamente a los ojos.</p>
  <p>— Tienes un gran futuro — dice inesperadamente.</p>
  <p>— ¿Cómo lo sabe? — preguntas.</p>
  <p>— Por tu rostro.</p>
  <p>— ¿Sólo por eso?</p>
  <p>— Así es.</p>
  <p>Mientras habláis, dos hombres elegantemente vestidos se acercan desde el fondo del vagón. Susurran unas palabras al oído del Presidente. Este te pide disculpas, estrecha tu mano y ordena a uno de los soldados que se encargue de que alguien cuide de ti en Gettysburg.</p>
  <p>Cuando el tren llega a Gettysburg, uno de los soldados te presenta a una familia que te acoge cariñosamente y te invita a quedarte con ellos durante algún tiempo si accedes a ayudarles en las tareas de la granja.</p>
  <p>Te resulta sorprendente vivir en una época sin coches, radios, televisores, tocadiscos, ni teléfonos. Resulta muy tranquila, por lo menos cuando no hay guerra, pero añoras tu hogar. Piensas que el gran futuro pronosticado por el Presidente debe estar en tu época y decides buscar alguna forma de volver a la Cueva del Tiempo.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_74(){
  historia.innerHTML = `<p>Si subes al tren puedes perder la oportunidad de volver a la Cueva del Tiempo. Es mejor permanecer cerca del túnel. Decides que, en cualquier caso, pensarás con más claridad después de haber comido algo.</p>
  <p>La mujer del granjero te ofrece un tazón de caldo, pero no oye con mucha simpatía la historia que has inventado para explicar tu presencia allí. Te das cuenta que no eres bien acogido, por lo que te marchas a la ciudad donde el posadero te permite pasar la noche en una de sus habitaciones.</p>
  <p>A la mañana siguiente logras que una diligencia te lleve a Filadelfia. Allí te acoge una familia de cuáqueros que te ayudan a encontrar trabajo como aprendiz de carpintero. El oficio no te gusta y pronto decides marcharte a Nueva York, donde consigues empleo en un periódico. Finalmente, acabas viajando a lo largo y ancho del mundo, disfrutando de una larga y maravillosa vida que termina precisamente unos cuantos años antes de que hayas nacido.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_75(){
  historia.innerHTML = `<p>Parkersville está sólo a un par de kilómetros. El Presidente te estrecha la mano y te desea suerte. Uno de los soldados se pone de acuerdo con el jefe de estación para que un carruaje te lleve hasta la granja de sus amigos.</p>
  <p>En poco tiempo te conviertes en uno más de la familia. Son buenas personas y procuran que te sientas como en tu casa. Te enteras, un poco sorprendido, de que tienen la intención de vender su granja para trasladarse a California. Lo que cuentan de la vida en el Oeste te resulta tan atractivo que decides ir con ellos.</p>
  <p>Nunca te arrepientes de haberlo hecho, aunque a veces te gustaría volver de nuevo a tu época.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_76(){
  historia.innerHTML = `<p>Vuelves a bajar por el túnel. Pretendes meterte por uno de los pasadizos laterales que pueda devolverte a tu época, pero estás demasiado cansado para dar con la entrada. Avanzas por el túnel, mitad resbalando mitad arrastrándote, y, después de recorrer una larga distancia, tropiezas y pierdes el equilibrio. Caes por el aire durante un buen rato, hasta que chocas con una masa de agua en la que te sumerges a mucha profundidad. El agua está caliente, pero la bruma es tan espesa que apenas puedes respirar. Luchando por sobrevivir, te das cuenta que has debido retroceder varios billones de años hasta una época en la que el oxígeno todavía no había sido liberado en la atmósfera.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_77(){
  historia.innerHTML = `<p>Te sientas, con la cabeza apoyada en las manos, incapaz de creer lo que te depara el destino. Vivir para siempre en un mundo sin tiempo te parece peor que la muerte.</p>
  <p>— Bueno, a decir verdad, sí hay un modo de salir de la cueva — dice finalmente la mujer, pero si lo haces ya no podrás vivir eternamente.</p>
  <p>— No me importa — dices —. Enséñame el camino.</p>
  <p>— Muy bien — responde, moviendo la cabeza con aire de incredulidad. Tienes que sumergirte debajo del saliente rocoso sobre el que estoy sentada y bucear por el túnel que hay debajo. De este modo llegarás a tu época. No tengas miedo; son sólo unos metros y podrás hacerlo con facilidad.</p>
  <p>Miras por última vez a tu alrededor, le dices adiós y te sumerges. Al cabo de unos instantes, sales a la superficie de un estanque situado a poca distancia de la entrada de la Cueva del Tiempo. Nadas hasta la orilla y corres afuera, estando a punto de chocar con tu tío Howard que ha venido a buscarte.</p>
  <p>— Llegas tarde a la cena — dice —. Temíamos que te hubiese sucedido algo. Deberías tener mejor sentido del tiempo.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_78(){
  historia.innerHTML = `<p>Al día siguiente llamas al departamento de zoología de la universidad más cercana y te pones en contacto con el doctor Henry Karn, especialista en grandes reptiles. El doctor se muestra escéptico, pero accede a trasladarse inmediatamente al rancho Red Creek para ver el huevo.</p>
  <p>En el tiempo que tarda en llegar empiezas a ponerte nervioso. ¿Y si el huevo fuera de plástico? Tu preocupación aumenta ante su aspecto severo. Os saluda con brusquedad, solicitando ver el huevo de inmediato.</p>
  <p>Cuando se lo das, lo observa atentamente sin decir palabra, lo mira al trasluz, lo golpea ligeramente y lo raspa con una navaja. Después lo mantiene pegado a su oído durante un rato. Finalmente, sonríe y vuelve a colocar el huevo en su sitio con mucho cuidado.</p>
  <p>— Es muy posible que se trate del huevo de un Plesiosaurios, dinosaurio acuático de la última etapa del período jurásico. No parece probable que pueda incubarse; de todos modos, me gustaría poder conservarlo en una incubadora de la Universidad por lo menos durante un año antes de abrirlo. Por supuesto, les mantendré al tanto de lo que pueda suceder.</p>
  <p>Han transcurrido ya varias semanas y cada vez que suena el teléfono piensas si será el doctor Karn.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_79(){
  historia.innerHTML = `<p>Cuando le cuentas que vienes del siglo XX a través de la Cueva del Tiempo, Nick se sonríe. Entonces le hablas de la vida en tu época, de los coches, aviones, teléfonos y televisores. Te escucha con mucha atención, exhibiendo una gran sonrisa, como si fuese la historia más divertida del mundo.</p>
  <p>— ¡Cómo me alegro de haberte encontrado! — dice —. Siempre había deseado saber cómo sería la vida en el siglo XX.</p>
  <p>Trata de parecer serio, pero no consigue evitar la risa porque piensa que se trata de una broma.</p>
  <p>— En serio — dices (sabiendo que nunca va a creerte) —, no tengo hogar. ¿Sabes de algún sitio donde pueda quedarme?</p>
  <p>— Seguramente podrás quedarte en mi casa. Somos tantos que uno más no importa, pero tendrás que trabajar en la tienda como todos nosotros.</p>
  <p>Como prácticamente no tienes otra posibilidad, aceptas su oferta agradecido por la comida y la cama que te ofrecen sus padres. Muy seriamente, Nick te informa que estás en el año 1718 en Boston, la ciudad más importante de la colonia inglesa de Massachusetts.</p>
  <p>Pronto formas parte de la familia. Son buena gente y te tratan bien, pero tienes que trabajar muchas horas al día cociendo jabón y vertiéndolo en los moldes, atendiendo a los clientes o haciendo recados para el padre de Nick, a quien llamas tío Ted.</p>
  <p>Uno de los vecinos, el señor Nelson, es impresor. Acaba de volver de Inglaterra donde ha comprado una imprenta. El negocio te interesa y piensas en trabajar con él como aprendiz, pero si lo haces tendrás que firmar un contrato que te obliga a trabajar lealmente para él durante seis años.</p>
  <button class="btn btn-primary" onclick="opc_81()">decides quedarte en casa y seguir trabajando con el tío Ted</button>
  <button class="btn btn-primary" onclick="opc_82()">decides contratarte como aprendiz en la imprenta del señor Nelson</button>
  `}function opc_80(){
  historia.innerHTML = `<p>Tratas de inventar alguna historia que explique por qué te has escapado de casa, pero Nick se da cuenta que no estás diciendo la verdad. Antes de que logres terminar, recoge sus bártulos de pesca, te dice adiós y se marcha.</p>
  <p>Cuando desaparece de la vista, te pones a andar por un camino y, al cabo de un par de kilómetros, llegas a una población. Te paras al lado de una iglesia pensando qué hacer, cuando se acerca un guardia que te pregunta de dónde vienes. Esta vez intentas explicar lo que realmente ha sucedido. Después de oír algunas frases, el guardia te arresta por conducta desordenada y te encierra en prisión local.</p>
  <p>Algo más tarde, entra un corpulento guardia de mirada poco inteligente en tu celda a traerte tu ración de sopa y pan. Está maravillado por tus extrañas ropas y por los rumores que corren sobre tu persona. Después de abrir la puerta, te alcanza la comida y te observa con curiosidad.</p>
  <p>— Dicen que estás de acuerdo con el diablo. ¿Es cierto? — pregunta.</p>
  <button class="btn btn-primary" onclick="opc_83()">tratas de escapar</button>
  <button class="btn btn-primary" onclick="opc_85()">le dices que eres inocente</button>
  `}function opc_81(){
  historia.innerHTML = `<p>Aunque sin duda te gustaría más trabajar en la imprenta que en el negocio de jabones, quieres permanecer libre para poder aprovechar cualquier oportunidad que se te presente.</p>
  <p>El trabajo con el tío Ted te resulta aburrido. No podrías soportar pasarte la vida fabricando velas y jabones. Dedicas la mayor parte de tu tiempo libre a leer los libros que caen en tus manos y tienes enormes deseos de viajar y ver mundo.</p>
  <p>Al cabo de algún tiempo, te enrolas como grumete en el bergantín Nina. El barco pertenece a un rico mercader y se dirige a las Barbados, en las Antillas, con una carga de madera para seguir después hasta Inglaterra.</p>
  <p>Descubres que la vida en el mar es mucho más dura de lo que habías pensado, sobre todo cuando te ves obligado a trepar por la jarcia en medio del temporal. Sin embargo, llegas a ser capitán de tu propio barco. En ninguno de los lugares que recorres dejas de preguntar a la gente si han oído hablar de la Cueva del Tiempo.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_82(){
  historia.innerHTML = `<p>Decides trabajar con el señor Nelson y, en poco tiempo, aprendes a manejar la imprenta. Sin embargo, no eres feliz. El impresor se niega a subirte el sueldo o a permitir que entres en el negocio. No encuentras trabajo en Boston, así que decides trasladarte a Filadelfia donde, al parecer, hay una gran demanda de impresores.</p>
  <p>Afortunadamente, el señor Nelson accede a liberarte del contrato de aprendizaje. Vendiendo casi todas tus pertenencias logras reunir suficiente dinero para pagar un pasaje en una goleta que bordea la costa. Tras un largo y desapacible viaje, el barco atraca un domingo por la mañana en el muelle comercial de Filadelfia.</p>
  <p>Estás cansado y hambriento, y empleas el poco dinero que te queda en comprar una barra de pan. Movido por la curiosidad, sigues a varias personas bien vestidas que entran en el lugar de reunión de los cuáqueros. Todos se sientan pero, siguiendo la costumbre, permanecen en silencio. El lugar es tan apacible que te quedas dormido. Cuando despiertas, los cuáqueros te dan la bienvenida. Una familia te ofrece alojamiento y, felizmente, logran encontrar trabajo con uno de los dos impresores de la ciudad.</p>
  <p>Te esfuerzas trabajando para perfeccionarte como impresor. En pocos años, con la ayuda de algunos amigos, logras reunir dinero para establecerte por tu cuenta.</p>
  <p>Tu negocio prospera y consigues editar tu propio periódico. Empiezas a pensar que el siglo XVIII es una buena época para vivir.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_83(){
  historia.innerHTML = `<p>El guardia está demasiado sorprendido y, quizá demasiado asustado, para impedirte la fuga. Corres por la calle tan deprisa como puedes. Cuando paras para recobrar el aliento, un carruaje conducido por un hombre delgado y con barba se acerca a ti.</p>
  <p>— Al parecer, estás en apuros — dice el hombre —. ¿Puedo ayudarte?</p>
  <p>Demasiado cansado para inventar ninguna historia, le cuentas todo lo que te ha sucedido. Vivamente impresionado por tu relato, te invita a una taberna cercana donde tomas la primera comida decente desde que has salido del rancho. Tu anfitrión apenas toca la comida. Está muy pálido y tose con frecuencia.</p>
  <button class="btn btn-primary" onclick="opc_84()">Continúa...</button>
  `}function opc_84(){
  historia.innerHTML = `<p>Cuando terminas tu historia, dice:</p>
  <p>— Es extraño que nos hayamos encontrado. Padezco de tuberculosis y ningún médico de Boston puede curarme. Mi única esperanza es encontrar la forma de llegar al futuro.</p>
  <p>— Creo que a mí me sucede lo mismo— respondes.</p>
  <p>— Si nos ayudamos mutuamente, puede que logremos volver a tu época, que también será la mía.</p>
  <p>Selláis el trato con un apretón de manos y, a la mañana siguiente, emprendéis la búsqueda a la salida del sol.</p>
  <p>Juntos lográis volver al tiempo presente. Tu amigo se cura con ayuda de los medicamentos modernos y se convierte en profesor de historia, famoso en todo el país por sus asombrosos conocimientos sobre la América colonial.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_85(){
  historia.innerHTML = `<p>Al confesarle tu inocencia, el guardia frunce el ceño y cierra de un portazo la celda.</p>
  <p>—¡Vete al diablo si quieres, pero no podrás arrastrarme contigo! — grita alejándose.</p>
  <p>Al día siguiente compareces ante un severo juez. Después de oír los cargos presentados contra ti y tus explicaciones, mueve su cabeza con expresión de enfado. Mirando al fiscal, descarga un puñetazo sobre el banquillo.</p>
  <p>— La acusación presentada contra este sujeto es de conducta desordenada, sin embargo se ha hablado de “ropas extrañas e historias inventadas por el diablo”. En el fondo, se le está acusando de brujería. ¡No estoy dispuesto a consentir semejantes insensateces en este tribunal! Se absuelve al acusado.</p>
  <p>El juez no sólo te pone en libertad, sino que te ayuda a conseguir una casa y a disfrutar de tu vida en el siglo XVIII.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>
  `}function opc_86(){
  historia.innerHTML = `<p>En la risa del caballero hay un cierto tono que no te inspira confianza, por lo que le das las gracias amablemente diciendo que tienes asuntos que atender.</p>
  <p>— Entonces, ocúpate de ellos — responde el caballero —, pero procura mantenerlos más limpios que tu persona.</p>
  <p>Se aleja a todo galope. Te alegras enorme— mente de haberte librado de él. Ansioso por buscar la entrada a la Cueva del Tiempo, subes por detrás del acantilado que desciende hasta el estanque. Después de una hora de búsqueda, encuentras un túnel que se adentra en la tierra.</p>
  <button class="btn btn-primary" onclick="opc_47()">Continúa...</button>
  `}function opc_87(){
  historia.innerHTML = `<p>Al subir a bordo te encuentras con una cámara cerrada, cuyas paredes te recuerdan el interior de una bañera. Piensas que los seres que controlan esta nave espacial pueden tener algún medio para dominar el tiempo. Quizá la Cueva del Tiempo sea creación suya. Ocupado con tus pensamientos, empiezas a sentir sueño y te quedas dormido.</p>
  <p>Te despiertas a oscuras, preguntándote si estarás viajando por el espacio en la extraña nave. Percibes una luz y echas a andar en esa dirección. Entonces te das cuenta que estás ante la entrada de la cueva. Te apresuras a salir y, con gran alegría, descubres que estás en el Cañón de la Serpiente donde nada ha cambiado. Has vuelto a tu época.</p>
  <p>Pasa mucho tiempo antes de que tengas deseos de volver a visitar esos parajes. Cuando lo haces, descubres que la entrada de la Cueva del Tiempo ha sido cubierta por un desprendimiento de rocas. Quizá haya sido mejor así.</p>
  <button class="btn btn-primary" onclick="opc_finish()">Fin</button>`}