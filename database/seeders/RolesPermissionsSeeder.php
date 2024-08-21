<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolesPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('permissions')->insert([
            ['id' => 1,'permission_name' => 'Employer_permission'],
            ['id'=> 2,'permission_name'=> 'Employed_permission'],
        ]);

        DB::table('roles_permissions')->insert([
            ['role_id' => 1, 'permission_id' => 1 ],
            ['role_id' => 2, 'permission_id' => 2 ],
        ]);
    }
}
