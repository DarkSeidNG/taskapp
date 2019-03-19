<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    public function questionOptions(){
        return $this->hasMany('App\Models\QuestionOptions');
    }

    public function questionRealAnswer(){
        return $this->hasOne('App\Models\RealAnswer');
    }
}
