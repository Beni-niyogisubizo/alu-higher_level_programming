-- Task: List all privileges of the MySQL users user_0d_1 and user_0d_2
-- This script checks for the existence of the users and lists their privileges.

-- Check if user_0d_1 exists
SELECT
    'user_0d_1' AS user,
    CASE
	        WHEN COUNT(*) = 0 THEN 'Users don’t exist'
			        ELSE GROUP_CONCAT(DISTINCT PRIVILEGE_TYPE) 
					    END AS privileges
					FROM
					    information_schema.USER_PRIVILEGES
					WHERE
					    users='localhost'
					;

