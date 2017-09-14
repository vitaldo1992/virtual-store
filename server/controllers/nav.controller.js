var nav = {
  states: {
    'home' : { title: 'home', url: '/' },
    'users' : { title: 'users', url: '/users' },
    'products': { title: 'products', url: '/products' },
    'registration': { title: 'registration', url: '/registration' },
    'login': { title: 'login', url: '/login' }
  },
  deActiveteMenu: function () {
    for (var key in this.states) {
      this.states[key].active = false;
    }
  }
}
module.exports = nav;
