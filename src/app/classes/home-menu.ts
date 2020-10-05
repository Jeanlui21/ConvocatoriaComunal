export class HomeMenu {
  menuList = [
    {name: 'Reserva de salas', visible: true, img: './assets/images/meeting-room.png'},
    {name: 'Reporte de problemas', visible: true, img: './assets/images/alert.png'},
    {name: 'Mi equipo', visible: true, img: './assets/images/team.png'},
    {name: 'Comunicados', visible: true, img: './assets/images/newspaper.png'},
    {name: 'Ficha de sintomatología', visible: true, img: './assets/images/termometer.svg'}
  ];

  getMenuList() {
    return this.menuList;
  }
}
