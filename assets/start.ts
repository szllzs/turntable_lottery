// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import turntable_lottery from "./turntable_lottery/turntable_lottery";

const {ccclass, property} = cc._decorator;

@ccclass
export default class start extends cc.Component {
    @property(turntable_lottery)
    lottery_o: turntable_lottery = null;
    @property(cc.EditBox)
    edit_target_o: cc.EditBox = null;
    /* -------------------------------segmentation------------------------------- */
    /* ***************其他事件*************** */
    public btn_抽奖(): void {
        this.lottery_o.scroll(Number(this.edit_target_o.string));
    }
}
