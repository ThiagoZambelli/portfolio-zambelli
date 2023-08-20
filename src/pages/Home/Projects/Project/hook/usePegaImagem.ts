import img2 from '../../assets/2.svg'
import img3 from '../../assets/3.svg'
import img4 from '../../assets/4.svg'
import img5 from '../../assets/5.svg'
import img6 from '../../assets/6.svg'
import img7 from '../../assets/7.svg'
import img8 from '../../assets/8.svg'
import img9 from '../../assets/9.svg'
import img10 from '../../assets/10.svg'

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