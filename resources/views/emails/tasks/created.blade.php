@component('mail::message')
# {{ $taskTitle }}

Hello <strong>{{ $userName }}</strong>, a task was just created for you on Task App.

Click the link below to start the challenge

@component('mail::button', ['url' => URL::to('/task')."/".$taskKey])
Start Challenge!!
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
