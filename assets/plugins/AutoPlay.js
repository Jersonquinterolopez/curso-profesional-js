function AutoPlay() {}
AutoPlay.prototype.run = function (player) {
  if (!player.muted) {
    player.muted = true;
  }
  player.play();
};
export default AutoPlay;

// siempre es una buena practica crear primero las funciones o arreglos vacios o logica vacia, para imaginarnos en que parte ira nuestro codigo y que parte hara alguna tarea en especifica, y mediante vamos escribiendo codigo vamos llenando esos campos vacios, que son al final del dia guias.
