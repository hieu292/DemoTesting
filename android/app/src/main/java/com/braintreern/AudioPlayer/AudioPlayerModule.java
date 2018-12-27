package com.braintreern.AudioPlayer;

import android.media.AudioManager;
import android.media.MediaPlayer;
import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class AudioPlayerModule extends ReactContextBaseJavaModule {

    private static MediaPlayer mediaPlayer = null;

    public AudioPlayerModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "AudioPlayerAndroid";
    }

    @ReactMethod
    public void preparePlayer(String url) {
        try{
            if (mediaPlayer != null) {
                mediaPlayer.release();
                mediaPlayer = null;
            }
            mediaPlayer = new MediaPlayer();
            mediaPlayer.setAudioStreamType(AudioManager.STREAM_MUSIC);
            mediaPlayer.setDataSource(url);
            mediaPlayer.setLooping(true);
            mediaPlayer.prepareAsync();
        }catch(Exception e){
            e.printStackTrace();
        }
    }

    @ReactMethod
    public void play() {
        try{
            if (mediaPlayer != null) {
                if (!mediaPlayer.isPlaying()) {
                    mediaPlayer.start();
                }
            }
        }catch(Exception e){
            e.printStackTrace();
        }
    }

    @ReactMethod
    public void pause(){
        try{
            if (mediaPlayer != null) {
                if (mediaPlayer.isPlaying()) {
                    mediaPlayer.pause();
                }
            }
        }catch(Exception e){
            e.printStackTrace();
        }
    }

    @ReactMethod
    public void setOnPreparedCallback(Callback onPrepared){
        final Callback onPreparedCallback = onPrepared;
        try{
            mediaPlayer.setOnPreparedListener(new MediaPlayer.OnPreparedListener() {
                @Override
                public void onPrepared(MediaPlayer player) {
                    try{
                        onPreparedCallback.invoke(mediaPlayer.getDuration()); // invoking the callback with duration as argument
                    }catch(Exception e){
                        e.printStackTrace();
                    }
                }
            });
        }catch(Exception e){
            e.printStackTrace();
        }
    }
}
