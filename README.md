# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# ChatSpace DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|strings|null: false, unique: false|
|password|strings|null: false|
|name|strings|null: false, unique: false|
|group_id|integer|null: false, foreign_key: true|
### Association
- has_many :groups, through: :users_groups
- has_many :messages

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|groupname|strings|
|user_id|integer|null: false, foreign_key: true|
### Association
- has_many :users, through: :users_groups
- has_many :messages

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|integer|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|tweet_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :message