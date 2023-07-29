import img22 from '../../assets/22.svg'
import img25 from '../../assets/25.svg'
import img27 from '../../assets/27.svg'
import img31 from '../../assets/31.svg'
import img32 from '../../assets/32.svg'
import img33 from '../../assets/33.svg'
import img4 from '../../assets/4.svg'
import img6 from '../../assets/6.svg'

export default function usePegaImagem () {

    return (numero: number) => {
        switch (numero) {
            case 22:
              return img22;              
            case 25:
              return img25;              
            case 27:
              return img27;              
            case 31:
              return img31;              
            case 32:
              return img32;              
            case 33:
              return img33;              
            case 4:
              return img4;              
            case 6:
              return img6;              
            default:
              return img4;
          }
    }

}