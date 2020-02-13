<?php
/**
 * Created by PhpStorm.
 * User: JHR
 * Date: 2018/10/8
 * Time: 18:21
 */
namespace app\admin\controller;
use think\Exception;
use think\Db;
class Plat extends Base {

    public function aboutUs() {
        $whereHome = [
            ['id','=',1]
        ];
        if(request()->isPost()) {
            $val['address'] = input('post.address');
            $val['address2'] = input('post.address2');
            $val['email'] = input('post.email');
            checkInput($val);
            if(!is_email($val['email'])) {
                return ajax('无效的邮箱',-1);
            }
            try {
                $exist = Db::table('mp_plat')->where($whereHome)->find();
                if(!$exist) {
                    return ajax('非法操作',-1);
                }
                Db::table('mp_plat')->where($whereHome)->update($val);
            }catch (\Exception $e) {
                return ajax($e->getMessage(),-1);
            }
            return ajax();
        }

        try {
            $exist = Db::table('mp_plat')->where($whereHome)->find();
            if (!$exist) {
                die('NOTHING FOUND');
            }
        } catch (\Exception $e) {
            die($e->getMessage());
        }
        $this->assign('info',$exist);
        return $this->fetch();
    }


}