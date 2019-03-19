<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {

        return [
            "id" => $this->id,
            "task_key" => $this->question,
            "user_email" => $this->question_type,
            "user_name" => $this->question_type,
            "task_title" => $this->question_type,
            "task_status" => $this->question_type,
            "user_email" => $this->question_type,
            "user_email" => $this->question_type,
        ];
    }
}
