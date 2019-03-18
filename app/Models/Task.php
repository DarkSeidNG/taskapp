<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    public function generateApiKey()
    {
        $this->task_key = str_random(20);
        $this->save();

        return $this->task_key;
    }
}
