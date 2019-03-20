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
            "task_key" => $this->task_key,
            "user_email" => $this->user_email,
            "user_name" => $this->user_name,
            "task_title" => $this->task_title,
            "task_status" => $this->task_status,
            "questions" => TaskQuestionResource::collection($this->questions),
        ];
    }
}
