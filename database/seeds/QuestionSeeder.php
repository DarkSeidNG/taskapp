<?php

use Illuminate\Database\Seeder;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Question::insert([
            'id' => 100,
            'question' => 'The behaviour of the instances present of a class inside a method is defined by',
            'question_type' => 'multi-option'
        ]);

        \App\Models\Question::insert([
            'id' => 101,
            'question' => 'The keyword or the property that you use to refer to an object through which they were invoked is',
            'question_type' => 'multi-option'
        ]);

        \App\Models\Question::insert([
            'id' => 102,
            'question' => 'The basic difference between JavaScript and Java is ',
            'question_type' => 'multi-option'
        ]);

        \App\Models\Question::insert([
            'id' => 103,
            'question' => 'What would you consider your greatest achievement and how has that helped you advance your career?',
            'question_type' => 'free-text'
        ]);

    }
}
