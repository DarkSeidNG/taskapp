<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TaskQuestion extends Model
{
    public function task(){
        return $this->belongsTo('App\Models\Task');
    }

    public function userAnswer(){
        return $this->hasOne('App\Models\UserAnswer');
    }
}
