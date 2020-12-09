let path = anime.path('#path1');
let path2 = anime.path('#path2')
let path3 = anime.path('#path3')

anime({
  targets: '#butterfly',
  translateX: path('x'),
  translateY: path('y'),
  easing: 'easeInCubic',
  duration: 10000,
  loop: true
});

anime({
    targets: '#eel',
    translateX: path2('x'),
    translateY: path2('y'),
    easing: 'linear',
    duration: 10000,
    loop: true
  });

anime({
    targets: '#shark',
    translateX: path3('x'),
    translateY: path3('y'),
    easing: 'linear',
    duration: 5000,
    loop: true
  });