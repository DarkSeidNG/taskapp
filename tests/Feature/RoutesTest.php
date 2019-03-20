<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RoutesTest extends TestCase
{
    /**
     * Test entry route.
     *
     * @return void
     */
    public function testEntryRoute()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function testCreateTaskRoute()
    {
        $response = $this->get('/tasks');

        $response->assertStatus(200);
    }

}
