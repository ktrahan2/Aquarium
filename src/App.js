import React from 'react'
import './App.css';
import Anime, { anime } from 'react-anime'

export default function App() {
  
  let path2 = anime.path('#path3')
  
  return (
    <div id="aquarium">
      <div id="fish-shape">
        <Anime
          translateX={path2('x')}
          translateY={path2('y')}
          duration="10000"
          loop="true"
          // easing="easeInCubic"
        >
          <div id="butterfly" className="fish"></div>
        </Anime>
        <svg width="975" height="780" ><path id="path2" d="M 100 300 Q 150 50 200 150 Q 250 550 300 150 Q 350 50 400 300 C 450 550 450 50 500 100 C 550 50 550 550 600 300 A 50 50 0 1 1 700 300 " stroke="black" strokeWidth="1px" fill="none"/><path id="path1" d="M380,10q-152,103,-2,257q-149,137,41,154q204,9,61,-149q192,-105,36,-259q-82,275,-136,-2" stroke="black" strokeWidth= "1px" fill="none"/><path id="path3" d="m57.06427,307.95422c0,-1 0.69125,-1.07181 2,-6c0.81166,-3.05634 2.5695,-7.133 4,-11c1.55159,-4.19434 3.48626,-6.82376 4,-9c0.68926,-2.91974 1.49346,-3.87857 2,-7c0.32037,-1.97418 0.69255,-4.186 2,-6c1.65381,-2.29453 3.34619,-2.70547 5,-5c1.30745,-1.814 3.186,-3.69254 5,-5c1.14727,-0.8269 2,-3 3,-4c2,-2 2.70546,-4.34619 5,-6c1.814,-1.30745 2.41886,-3.41885 4,-5c1.58114,-1.58115 3,-2 4,-3c1,-1 1,-2 2,-3c1,-1 3.186,-2.69255 5,-4c2.29454,-1.65381 4,-3 6,-5c1,-1 3.186,-2.69255 5,-4c2.29454,-1.65381 2,-2 2,-2c1,-1 1.69344,-2.4588 3,-3c0.92388,-0.38269 3,-1 5,-2c2,-1 4,-3 5,-4c1,-1 2.70546,-1.34619 5,-3c1.814,-1.30745 4,-2 6,-3c2,-1 3.08582,-2.42043 5,-3c3.45085,-1.04483 5.08025,-2.31075 8,-3c4.35251,-1.02748 7.87856,-3.49345 11,-4c1.97418,-0.32036 4,-1 4,-1c1,0 2.87856,-0.49345 6,-1c2.96126,-0.48055 5.0535,-1.4595 7,-1c2.17625,0.51375 3,1 5,1c2,0 5,0 7,0c3,0 4,1 6,1c2,0 3.87856,0.49345 7,1c0.98709,0.16019 2.0535,0.5405 4,1c2.17625,0.51375 4.07843,1.78986 7,3c2.06586,0.85571 4,1 5,2c0,0 1,0 2,1c0,0 0.29289,0.29289 1,1c0.70711,0.70711 1.29289,0.29289 2,1c0.70711,0.70711 0.38687,2.9176 3,4c0.92387,0.38269 0.09789,1.82443 2,3c0.85065,0.52573 1.69344,1.4588 3,2c0.92387,0.38269 2,1 3,2c1,1 2.07613,1.61731 3,2c1.30656,0.5412 1.69344,2.4588 3,3c0.92387,0.38269 1.69344,1.4588 3,2c0.92387,0.38269 2.61731,1.07613 3,2c0.5412,1.30656 2,1 2,1c0,0 0.38687,0.9176 3,2c1.84775,0.76537 4.82376,1.48625 7,2c0.97324,0.22975 1.69345,0.4588 3,1c0.92389,0.38269 2.02582,-0.32036 4,0c3.12143,0.50655 4.87857,1.49345 8,2c2.96127,0.48055 5,0 7,0c2,0 5,1 7,1c3,0 4,0 5,0c1,0 2,0 4,0c2,0 5,-1 8,-1c2,0 4.02582,0.32036 6,0c3.12143,-0.50655 5.02676,-0.77025 6,-1c2.17624,-0.51375 3,-1 5,-1c2,0 3.82376,-0.48625 6,-1c2.91974,-0.68925 6.02997,0.48874 10,0c4.09222,-0.50377 7,-2 9,-2c1,0 2.02676,-0.77025 3,-1c2.17624,-0.51375 3.82376,-2.48625 6,-3c1.9465,-0.4595 4,-1 6,-2c2,-1 4,-2 6,-3c2,-1 3.0535,-1.5405 5,-2c2.17624,-0.51375 6.07843,-1.78986 9,-3c2.06586,-0.85571 4.90283,-1.2242 7,-2c3.867,-1.4305 7.02676,-1.77025 8,-2c2.17624,-0.51375 4.03067,-1.91231 7,-3c5.05658,-1.85226 13.83807,-3.46552 19,-5c4.88763,-1.45294 8.0535,-1.5405 10,-2c2.17624,-0.51375 3.87857,-1.49345 7,-2c0.98709,-0.16019 3,-1 4,-1c1,0 2,0 4,-1c2,-1 3.87857,-1.49345 7,-2c3.94836,-0.64073 8.92578,-1.49756 14,-2c4.97568,-0.49269 10,-1 14,-1c6,0 10.03873,-0.51945 13,-1c3.12143,-0.50655 6,-1 10,-1c5,0 7,0 9,0c2,0 4.05353,-0.4595 6,0c2.17627,0.51375 4.03876,0.51945 7,1c3.12146,0.50655 3.82373,1.48625 6,2c0.97327,0.22975 3,0 3,0c2,1 4.05353,0.5405 6,1c2.17627,0.51375 4.69342,1.4588 6,2c1.84778,0.76537 1.797,0.2565 3,1c2.69,1.66251 6.07843,2.78986 9,4c2.06586,0.85571 3.18604,1.69255 5,3c1.14728,0.8269 2,2 3,3c1,1 3,2 4,3c1,1 2,2 3,3c1,1 2,2 3,3c0,0 0.14935,0.47427 1,1c1.9021,1.17557 0.0979,2.82443 2,4c0.85065,0.52573 0.61731,1.07613 1,2c0.5412,1.30656 0.58582,2.58578 2,4c0.70709,0.70711 1,1 2,2c1,1 1,2 1,3c0,0 1,1 1,2c0,0 -0.70709,1.29289 0,2c0.70709,0.70711 1,1 1,1c0,1 0,2 0,3c0,1 0,1 0,3c0,0 0,1 0,1c0,1 0,2 0,3c0,1 0.70709,3.29289 0,4c-0.70709,0.70711 -1,2 -1,3c0,0 -0.77026,1.02676 -1,2c-0.51373,2.17624 -2,3 -3,4c-1,1 -1,2 -2,3c0,0 -1.48627,0.82376 -2,3c-0.22974,0.97324 -1,2 -1,2c-1,2 -0.94855,3.29871 -2,5c-1.1756,1.9021 -2.29291,1.29291 -3,2c-0.70709,0.70709 -1,2 -1,2c-2,1 -3.07611,1.61731 -4,2c-1.30658,0.5412 -1,1 -2,2c-1,1 -3,2 -4,3c-1,1 -2.41888,0.41885 -4,2c-1.58112,1.58115 -2,2 -3,3c-1,1 -1.61731,2.07611 -2,3c-0.5412,1.30655 -1.85272,1.1731 -3,2c-1.81396,1.30746 -2.29291,1.29291 -3,2c-0.70709,0.70709 -0.61731,2.07611 -1,3c-0.5412,1.30655 -1,1 -2,2c0,0 -0.48627,0.82376 -1,3c-0.45953,1.9465 -1.1731,3.85272 -2,5c-1.30743,1.814 -1,3 -2,4c-1,1 -0.69342,3.4588 -2,4c-0.92389,0.38269 -1.4588,0.69345 -2,2c-0.38269,0.92389 -1.18604,0.69254 -3,2c-1.14728,0.8269 -2.82373,2.48627 -5,3c-0.97327,0.22977 -1.93414,1.14429 -4,2c-2.92157,1.21014 -3.69342,1.4588 -5,2c-0.92389,0.38269 -2.29291,-0.70709 -3,0c-0.70709,0.70709 -2,1 -4,1c-1,0 -2,0 -4,0c-1,0 -2,0 -4,0c-1,0 -3,-1 -4,-1c-2,0 -3.08026,-0.31073 -6,-1c-2.17624,-0.51373 -3,-1 -5,-1c-1,0 -3.15225,-0.23462 -5,-1c-1.30655,-0.5412 -3,-1 -3,-1c-1,0 -3,-1 -4,-1c-3,0 -5,-1 -7,-1c-2,0 -4,-1 -7,-1c-2,0 -4,0 -6,0c-3,0 -4.82376,0.48627 -7,1c-1.9465,0.4595 -4,1 -5,1c-2,0 -2.69345,0.4588 -4,1c-1.84775,0.76538 -3.82376,1.48627 -6,2c-1.9465,0.4595 -4.02676,0.77023 -5,1c-2.17624,0.51373 -4.02676,0.77023 -5,1c-2.17624,0.51373 -4,2 -6,2c-1,0 -3.15225,0.23462 -5,1c-1.30655,0.5412 -3.02676,0.77023 -4,1c-2.17624,0.51373 -2.82376,1.48627 -5,2c-1.9465,0.4595 -4.0535,0.5405 -6,1c-2.17624,0.51373 -4.07611,1.61731 -5,2c-1.30655,0.5412 -3.07611,1.61731 -4,2c-1.30655,0.5412 -2,1 -4,2c-2,1 -4.15225,1.23462 -6,2c-1.30655,0.5412 -1.82376,1.48627 -4,2c-1.9465,0.4595 -4.82376,1.48627 -7,2c-0.97324,0.22977 -2,0 -2,0c-4,1 -9,2 -15,2c-6,0 -11.92578,1.49756 -17,2c-2.98541,0.29562 -6,0 -9,0c-2,0 -6,1 -10,1c-3,0 -7.08026,-0.68927 -10,0c-2.17624,0.51373 -5.03873,1.48056 -8,1c-3.12143,-0.50653 -6,-1 -9,-1c-4,0 -7,0 -10,0c-3,0 -5.87857,-0.49347 -9,-1c-4.93542,-0.8009 -10.02997,-0.51126 -14,-1c-4.09222,-0.50378 -9,-1 -13,-2c-4,-1 -8.90779,-1.49622 -13,-2c-2.97752,-0.36655 -6.08025,-0.31073 -9,-1c-2.17625,-0.51373 -5,-1 -8,-2c-3,-1 -5.69344,-1.4588 -7,-2c-1.84776,-0.76538 -3.82375,-1.48627 -6,-2c-1.9465,-0.4595 -3,-1 -4,-2c-1,-1 -2.41885,-1.41885 -4,-3c-1.58115,-1.58115 -3.14935,-2.47427 -4,-3c-1.90211,-1.17557 -3.07613,-2.61731 -4,-3c-1.30656,-0.5412 -1.93414,-2.14429 -4,-3c-2.92157,-1.21014 -5,-2 -8,-3c-3,-1 -5.15224,-1.23462 -7,-2c-1.30656,-0.5412 -3,-1 -6,-1c-2,0 -7,-1 -10,-1c-3,0 -6,0 -7,0c-2,0 -2.69344,0.4588 -4,1c-0.92387,0.38269 -2.82375,0.48627 -5,1c-0.97325,0.22977 -4,0 -6,1c-2,1 -2.87856,1.49347 -6,2c-1.97417,0.32037 -3.87856,1.49347 -7,2c-0.98709,0.16019 -2,0 -5,1c-3,1 -7.03746,0.38907 -12,1c-4.09222,0.50378 -7,1 -9,1c-1,0 -3.08025,-0.68927 -6,0c-2.17625,0.51373 -3,1 -5,1c-2,0 -5.0535,0.4595 -7,0c-2.17625,-0.51373 -2.82375,-1.48627 -5,-2c-0.97325,-0.22977 -1.31001,0.66251 -4,-1c-2.40601,-1.487 -7.31001,-3.33749 -10,-5c-1.203,-0.7435 -0.69255,-1.186 -2,-3c-0.8269,-1.14728 -2,-3 -2,-4c0,0 -0.29289,-0.29291 -1,-1c-0.70711,-0.70709 0,-2 0,-2c0,-1 0,-2 0,-3c0,-1 1,-2 1,-2c0,0 2,-2 2,-2c0,0 0.07612,-0.61731 1,-1c1.30656,-0.5412 1,-1 1,-1c1,-1 1,-1 1,-2c0,0 1,0 1,-1c0,0 0,-1 0,-1c1,-1 1,-1 1,-2l0,0" stroke="green" fill="none"/></svg>
      </div>
    </div>
  )
}


