import barba from '@barba/core'
import barbaCss from '@barba/css'

barba.use(barbaCss)

barba.init({
  transitions: [
    {
      name: "home",
      to: { namespace: ['home'] },
      sync: true,
      once() { },
      leave() { },
      enter() { }
    },
    {
      name: "projects",
      to: { namespace: ['projects'] },
      once() { },
      leave() { },
      enter() { }
    },
    {
      name: "contact",
      to: { namespace: ['contact'] },
      once() { },
      leave() { },
      enter() { }
    }
  ]
})