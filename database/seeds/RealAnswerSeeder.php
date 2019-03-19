<?php

use Illuminate\Database\Seeder;

class RealAnswerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\RealAnswer::insert([
            'question_id' => 100,
            'question_option_id' => 201
        ]);

        \App\Models\RealAnswer::insert([
            'question_id' => 101,
            'question_option_id' => 207
        ]);

        \App\Models\RealAnswer::insert([
            'question_id' => 102,
            'question_option_id' => 212
        ]);
    }
}
