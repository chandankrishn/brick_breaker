
import { _decorator, Component, Node, Button, tween, Vec2, Vec3, Prefab, instantiate, UITransform, Sprite, systemEvent, SystemEvent, KeyCode, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Mainscript
 * DateTime = Wed Sep 22 2021 10:24:04 GMT+0530 (India Standard Time)
 * Author = chandan_krishnani
 * FileBasename = Mainscript.ts
 * FileBasenameNoExtension = Mainscript
 * URL = db://assets/scripts/Mainscript.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('Mainscript')
export class Mainscript extends Component {
    // [1]
    // dummy = '';
@property(Button)
Play_button:any;
@property(Prefab)
Breaker:any;
@property(Sprite)
base:any;
@property(Sprite)
left:any;
@property(Sprite)
right:any;
@property(Sprite)
top:any;
@property(Prefab)
ball:any;
@property(Prefab)
brick:any;
@property(SpriteFrame)
bricks=[];
@property(SpriteFrame)
damagedbricks=[];
redball:any;
bouncer:any;
height:number;
width:number;
temp_bricks:any;

    // [2]
    // @property
    // serializableDummy = 0;
coliderpatter()
{
    let height:number=(this.height/2)-70;
    let width:number=-(this.width/2)+100;
    let tile_width:number=150;
    
    


    for(var i=0;i<=5;i++)
    {
        for(var j=5;j>i;j--)
        {
         this.temp_bricks=instantiate(this.brick);
         this.node.addChild(this.temp_bricks);
         this.temp_bricks.setPosition(width,height,0);
         width=width+tile_width;


        }
        width=width-(tile_width*4-i);
        height=height-60;
    }
    



}
 buttonpressed()
 {
    tween(this.Play_button.node)
    .to(0.2,{scale : new Vec3(2,2,2)})
    .delay(0.1)
    .to(0.2,{scale :new Vec3(1,1,1)})
    .delay(0.3)
    .to(0.2,{scale :new Vec3(0,0,0)})
    .start();
    this.gamePlayStart();
    this.coliderpatter();
 }

 gamePlayStart()
 {

     this.bouncer=instantiate(this.Breaker);
     this.node.addChild(this.bouncer);
     this.redball=instantiate(this.ball);
     this.node.addChild(this.redball);
     this.height=this.node.getComponent(UITransform).height;
     this.width=this.node.getComponent(UITransform).width;
     this.bouncer.setPosition(0,-(this.height/2)+100,0);
     tween(this.base.node)
     .to(0.5,{position : new Vec3(0,-(this.height/2),0)})
     .start();

     tween(this.right.node)
     .to(0.5,{position : new Vec3((this.width/2),0,0)})
     .start();

     tween(this.left.node)
     .to(0.5,{position : new Vec3(-(this.width/2),0,0)})
     .start();

     tween(this.top.node)
     .to(0.5,{position : new Vec3(0,(this.height/2),0)})
     .start();


     
 }
    start () 
    {

       

        // [3]
    }
//     mouseMove(event:any)
//     {
//         if(this.bouncer.position.x<this.width/2-70 && this.bouncer.position.x+130 >-(this.width/2)+70)
//         {
//         switch(event.keyCode)
//         {
           
//         case KeyCode.ARROW_LEFT:
       
//             tween(this.bouncer)
//             .by(0.1,{position : new Vec3(-30,0,0)})
//            .start();
//            break;
            
            
          
//         case KeyCode.ARROW_RIGHT:
//             console.log("Arrow right key");
           
//             tween(this.bouncer)
//             .by(0.1,{position : new Vec3(30,0,0)})
//             .start();
//             break;

//         }
//     }
//     else
//     {
//         if(this.bouncer.position.x<this.width/2+70)
//         {
//             switch(event.keyCode)
//             {
//                 case KeyCode.ARROW_RIGHT:
//                 console.log("Arrow right key");
               
//                 tween(this.bouncer)
//                 .by(0.1,{position : new Vec3(30,0,0)})
//                 .start();
//                 break;
//             }
           
//     }
//     else
//     {
       
//         switch(event.keyCode)
//         {
           
//         case KeyCode.ARROW_LEFT:
       
//             tween(this.bouncer)
//             .by(0.1,{position : new Vec3(-30,0,0)})
//            .start();
//            break;

//     }

//     }

//     }
// }
    touchMove(event:any)
    {
        let current:number;
        if(event.getLocation().x>(this.width/2))
        {
            current=event.getLocation().x-this.width/2;
        }
        
        else
        {
            current=-((this.width/2)-event.getLocation().x);
        }
        console.log(current);
        if(current<this.width/2-70 && current>-(this.width/2)+70)
        {
        this.bouncer.setPosition(current,-(this.height/2)+100,0);
        }
    }

    onLoad()
    {
        // systemEvent.on(SystemEvent.EventType.KEY_DOWN,this.mouseMove,this);
        systemEvent.on(SystemEvent.EventType.TOUCH_MOVE,this.touchMove,this);

    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */
