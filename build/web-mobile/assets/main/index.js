System.register("chunks:///_virtual/Mainscript.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var i,e,r,n,o,a,s,l,h,c,u,b,p,d,g,f,w,y;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,r=t.initializerDefineProperty,n=t.assertThisInitialized,o=t.defineProperty},function(t){a=t.cclegacy,s=t._decorator,l=t.Button,h=t.Prefab,c=t.Sprite,u=t.SpriteFrame,b=t.instantiate,p=t.tween,d=t.Vec3,g=t.UITransform,f=t.systemEvent,w=t.SystemEvent,y=t.Component}],execute:function(){var m,v,k,z,_,P,M,C,L,S,x,B,E,T,D,F,H,I,A,O,R,U,V;a._RF.push({},"33946kAz/hNWambHanYnxIq","Mainscript",void 0);var j=s.ccclass,q=s.property;t("Mainscript",(m=j("Mainscript"),v=q(l),k=q(h),z=q(c),_=q(c),P=q(c),M=q(c),C=q(h),L=q(h),S=q(u),x=q(u),m((T=i((E=function(t){function i(){for(var i,e=arguments.length,a=new Array(e),s=0;s<e;s++)a[s]=arguments[s];return i=t.call.apply(t,[this].concat(a))||this,r(n(i),"Play_button",T,n(i)),r(n(i),"Breaker",D,n(i)),r(n(i),"base",F,n(i)),r(n(i),"left",H,n(i)),r(n(i),"right",I,n(i)),r(n(i),"top",A,n(i)),r(n(i),"ball",O,n(i)),r(n(i),"brick",R,n(i)),r(n(i),"bricks",U,n(i)),r(n(i),"damagedbricks",V,n(i)),o(n(i),"redball",void 0),o(n(i),"bouncer",void 0),o(n(i),"height",void 0),o(n(i),"width",void 0),o(n(i),"temp_bricks",void 0),i}e(i,t);var a=i.prototype;return a.coliderpatter=function(){for(var t=this.height/2-70,i=-this.width/2+100,e=0;e<=5;e++){for(var r=5;r>e;r--)this.temp_bricks=b(this.brick),this.node.addChild(this.temp_bricks),this.temp_bricks.setPosition(i,t,0),i+=150;i-=600-e,t-=60}},a.buttonpressed=function(){p(this.Play_button.node).to(.2,{scale:new d(2,2,2)}).delay(.1).to(.2,{scale:new d(1,1,1)}).delay(.3).to(.2,{scale:new d(0,0,0)}).start(),this.gamePlayStart(),this.coliderpatter()},a.gamePlayStart=function(){this.bouncer=b(this.Breaker),this.node.addChild(this.bouncer),this.redball=b(this.ball),this.node.addChild(this.redball),this.height=this.node.getComponent(g).height,this.width=this.node.getComponent(g).width,this.bouncer.setPosition(0,-this.height/2+100,0),p(this.base.node).to(.5,{position:new d(0,-this.height/2,0)}).start(),p(this.right.node).to(.5,{position:new d(this.width/2,0,0)}).start(),p(this.left.node).to(.5,{position:new d(-this.width/2,0,0)}).start(),p(this.top.node).to(.5,{position:new d(0,this.height/2,0)}).start()},a.start=function(){},a.touchMove=function(t){var i;i=t.getLocation().x>this.width/2?t.getLocation().x-this.width/2:-(this.width/2-t.getLocation().x),console.log(i),i<this.width/2-70&&i>-this.width/2+70&&this.bouncer.setPosition(i,-this.height/2+100,0)},a.onLoad=function(){f.on(w.EventType.TOUCH_MOVE,this.touchMove,this)},i}(y)).prototype,"Play_button",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=i(E.prototype,"Breaker",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=i(E.prototype,"base",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),H=i(E.prototype,"left",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=i(E.prototype,"right",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=i(E.prototype,"top",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=i(E.prototype,"ball",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=i(E.prototype,"brick",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),U=i(E.prototype,"bricks",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),V=i(E.prototype,"damagedbricks",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),B=E))||B));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Mainscript.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});