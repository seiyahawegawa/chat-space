class CreateTweetsTags < ActiveRecord::Migration[6.0]
  def change
    create_table :tweets_tags do |t|

      t.timestamps
    end
  end
end
