ALTER TABLE tokens
ADD COLUMN user_id BIGINT NOT NULL,
ADD CONSTRAINT FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;