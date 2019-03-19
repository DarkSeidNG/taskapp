<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TaskQuestion extends Model
{
    public function task(){
        return $this->belongsTo('App\Models\Task');
    }

    public function question(){
        return $this->belongsTo('App\Models\Question');
    }

    public function userAnswer(){
        return $this->hasOne('App\Models\UserAnswer');
    }
}
