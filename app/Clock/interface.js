export const UI =  `
<h2 id="title">Reloj</h2>
<p id="time">00:00:00</p>
<input id="H" type="number" min="0" value="0" max="99"/>
<input id="m" type="number" min="0" value="0" max="59"/>
<input id="s" type="number" min="0" value="0" max="59"/>
<select id="type">
    <option value="0">cronometro</option>
    <option value="1">temporizador</option>
</select>
<button id="start">Iniciar</button>
<button id="pause">Pausar</button>
<button id="stop">Detener</button>`