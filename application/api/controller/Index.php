<?php
/**
 * Created by PhpStorm.
 * User: JHR
 * Date: 2020/2/13
 * Time: 10:20
 */
namespace app\api\controller;

use think\Controller;
use think\Db;

class Index extends Controller {

    public function index() {
        try {
            $where = [
                ['id','=',1]
            ];
            $info = Db::table('mp_plat')->where($where)->find();
        } catch(\Exception $e) {
            return ajax($e->getMessage(),-1);
        }
        $this->assign('info',$info);
        return $this->fetch();
    }

    public function mindex() {
        return $this->fetch();
    }



}