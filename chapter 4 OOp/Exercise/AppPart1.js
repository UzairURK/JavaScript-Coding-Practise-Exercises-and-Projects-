// 1.Implement a function createPoint that creates a point in the plane with a given x and y coordinates. Provide methods getX, getY, translate, and scale. The translate method moves the point by a given amount in x and y direction. The scale method scales both coordinates by a given factor. Use only the techniques of Section 4.1, “Methods” (page 77).
createpoint = {
    getx: 10,
    gety: 20,
    
    translate( movex, movey ) {
        this.getx += movex; // move x
        this.gety += movey;
        return `(${this.getx}, ${this.gety})`;
    },
    scale( factor ) {
        this.getx *= factor; // measures factor
        this.gety *= factor;
        return `${factor} factor is (${this.getx}, ${this.gety})`
    }
}

    
    const translate = createpoint.translate(5, 10);
    const scale = createpoint.scale(3);
    // console.log(translate);
    // console.log(scale)

    // Repeat the preceding exercise, but now implement a constructor function and use prototypes, as in Section 4.2, “Prototypes” (page 78).

    function CreatePoint( x, y ) { //constructor function by using prototype
        return {
       x: x,
       y: y,
        translate: function (movex, movey ) {
        this.x += movex; // move x
        this.y += movey;
        return `(${this.x}, ${this.y})`;
        },

        scale: function(factor) {
        this.x *= factor; // measures factor
        this.y *= factor;
        return `${factor} factor is (${this.x}, ${this.y})`
        }
    }
} // end 

    const cordinate = new CreatePoint(10, 20);
    const translate1 = cordinate.translate(5, 5);
    const scale1 = cordinate.scale(3);
    console.log(translate1);
    console.log(scale1)

    // 3: Repeat the preceding exercise, but now use the class syntax.
    class createPoint1 { // constructor in class form
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        translate( movex, movey ) { // method
        this.x += movex; // move x
        this.y += movey;
        return `(${this.x}, ${this.y})`;
        }

        scale(factor) { // method
        this.x *= factor; // measures factor
        this.y *= factor;
        return `${factor} factor is (${this.x}, ${this.y})`
        }

    }

    const point = new createPoint1(13, 21); // 
    const trans =  point.translate(3, 3) // (16, 24).
    const sca = point.scale(5);
    console.log( sca ); 

    //5: Consider this function that makes a string “greetable” by adding a greet method:

    function createGreetable(str) { // function
        // this.str = str;
        const result = new String(str);
        result.greet = (greeting) => { // method in Function       String ('Hello', greet: function);
            return `${greeting}, ${this}!`;
        }
        
        // this.Result = function() { --> It shows error because It is can only be in a constructor not in functioin cuz It is function 
        //     // return result;
        //     return 'dkf';
        // }
        
        return result;
}

    const g = new createGreetable('Hello');
    
    console.log(g.greet('World'));

 
