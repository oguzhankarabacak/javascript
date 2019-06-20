//static metodları class ismiyle beraber kullanabiliriz

class Matematik{
    cube(x){   //normal metod
        console.log(x*x*x);
    }
    static square(x){  //static metod
        console.log(x*x);
    }
}

Matematik.square(24);

const math=new Matematik();
console.log(math);
math.square(12);  //burda hatı alırız çünkü statik metodlar classın prototypeına yazılmıyor.O yüzden sadece class üstünden erişilebiliyor

//Bazı static metodlar   -->  Object.create(); , Math.pow(2,3);