<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    public function questions(){
        return $this->hasMany('App\Models\TaskQuestion');
    }
}
