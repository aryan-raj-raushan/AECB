#!/bin/bash

# Assuming $BRANCH is set elsewhere in your script

source .env

# Print the current values for debugging
echo "Before updating:"
echo "DEV_DB_FILE is: ${DEV_DB_FILE}"
echo "DEV_DB_HOST is: ${DEV_DB_HOST}"
echo "DEV_DB_NAME is: ${DEV_DB_NAME}"
echo "DEV_DB_USERNAME is: ${DEV_DB_USERNAME}"
echo "DEV_DB_PASSWORD is: ${DEV_DB_PASSWORD}"
echo "DEV_DB_PORT is: ${DEV_DB_PORT}"
echo "DEV_DB_CLIENT is: ${DEV_DB_CLIENT}"
echo "DEV_NODE_ENV is: ${DEV_NODE_ENV}"

# Define function to update environment variables in .env file
update_env_variable() {
  local variable_name="$1"
  local new_value="$2"
  local env_file=".env"

  awk -v var="$variable_name" -v val="$new_value" -F= '$1 == var {$0 = var "=" "\"" val "\""} 1' OFS="=" "$env_file" > temp && mv temp "$env_file"


  # # Use sed to update the variable in the .env file
  # awk -v var="$variable_name" -v val="$new_value" -F= '$1 == var {$1=var; $2=val}1' OFS="=" "$env_file" > temp && mv temp "$env_file"
}

# Update environment variables based on the branch
if [ "$BRANCH" = "develop" ]; then
  update_env_variable "DB_FILE" "${DEV_DB_FILE}"
  update_env_variable "DB_HOST" "${DEV_DB_HOST}"
  update_env_variable "DB_NAME" "${DEV_DB_NAME}"
  update_env_variable "DB_USERNAME" "${DEV_DB_USERNAME}"
  update_env_variable "DB_PORT" "${DEV_DB_PORT}"
  update_env_variable "DB_CLIENT" "${DEV_DB_CLIENT}"
  update_env_variable "NODE_ENV" "${DEV_NODE_ENV}"
elif [ "$BRANCH" = "qa" ]; then
  update_env_variable "DB_FILE" "${QA_DB_FILE}"
  update_env_variable "DB_HOST" "${QA_DB_HOST}"
  update_env_variable "DB_NAME" "${QA_DB_NAME}"
  update_env_variable "DB_USERNAME" "${QA_DB_USERNAME}"
  update_env_variable "DB_PASSWORD" "${QA_DB_PASSWORD}"
  update_env_variable "DB_PORT" "${QA_DB_PORT}"
  update_env_variable "DB_CLIENT" "${QA_DB_CLIENT}"
  update_env_variable "NODE_ENV" "${QA_NODE_ENV}"
fi


source .env
# Print the current values for debugging
echo "After updating:"
echo "DEV_DB_FILE is: ${DB_FILE}"
echo "DEV_DB_HOST is: ${DB_HOST}"
echo "DEV_DB_NAME is: ${DB_NAME}"
echo "DEV_DB_USERNAME is: ${DB_USERNAME}"
echo "DEV_DB_PASSWORD is: ${DB_PASSWORD}"
echo "DEV_DB_PORT is: ${DB_PORT}"
echo "DEV_DB_CLIENT is: ${DB_CLIENT}"
echo "DEV_NODE_ENV is: ${NODE_ENV}"
