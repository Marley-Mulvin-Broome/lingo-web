<script>
	import ActivityPanel from "$lib/Components/MainMenu/ActivityPanel.svelte";

</script>

<hgroup>
    <h1 class="text-5xl text-left mt-16 mb-2 tracking-tight">
        Lingle
    </h1>
    <p class="text-neutral-800">
        あらゆるコンテンツを英語学習教材に変えるアプリ
    </p>    
</hgroup>


<div class="flex flex-row flex-wrap py-5 gap-10">
    <ActivityPanel href="/home/news" title="最新のニュース">
        世界のニュースを英語で読んでみよう
    </ActivityPanel>

    <ActivityPanel href="/home/flashcards" bg="bg-jungle-400" title="フラッシュカード">
        wow
    </ActivityPanel>
</div>


