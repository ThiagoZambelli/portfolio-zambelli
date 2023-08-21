import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/4.png'
import img5 from '../../assets/5.png'
import img6 from '../../assets/6.png'
import img7 from '../../assets/7.png'
import img8 from '../../assets/8.png'
import img9 from '../../assets/9.png'
import img10 from '../../assets/10.png'

export default function usePegaImagem () {

    return (numero: number) => {
        switch (numero) {
            case 2:
              return img2;              
            case 10:
              return img10;              
            case 3:
              return img3;              
            case 4:
              return img4;              
            case 5:
              return img5;              
            case 6:
              return img6;              
            case 7:
              return img7;              
            case 8:
              return img8;              
            case 9:
              return img9;              
            default:
              return img4;
          }
    }

}